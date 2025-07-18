#!/bin/bash

validate_report() {
  local report_file="$1"
  echo "📊 Validating $report_file"

  if [ ! -f "$report_file" ]; then
    echo "❌ Report file not found: $report_file"
    exit 1
  fi

  local max
  local avg
  local errored

  max=$(grep '^\s*max:' "$report_file" | sed -E 's/.*max:[[:space:]]*([0-9]+).*/\1/')
  avg=$(grep '^\s*avg:' "$report_file" | sed -E 's/.*avg:[[:space:]]*([0-9]+\.[0-9]+).*/\1/')
  errored=$(grep '^\s*errored:' "$report_file" | sed -E 's/.*errored:[[:space:]]*([0-9]+).*/\1/')

  echo "Parsed values:"
  echo "  ↪ max:     $max"
  echo "  ↪ avg:     $avg"
  echo "  ↪ errors:  $errored"

  if [[ -z "$max" || -z "$avg" || -z "$errored" ]]; then
    echo "❌ Could not parse required metrics from $report_file"
    exit 1
  fi

  if (( max >= 10000 )); then
    echo "❌ Max response time too high: ${max}ms (limit 10000ms)"
    exit 1
  fi

  # Преобразуем avg в целое число (отбрасываем дробную часть)
  avg_int=${avg%.*}
  if (( avg_int >= 1600 )); then
    echo "❌ Average response time too high: ${avg}ms (limit 1600ms)"
    exit 1
  fi

  if (( errored > 0 )); then
    echo "❌ Found ${errored} errored steps (expected 0)"
    exit 1
  fi

  echo "✅ Report passed thresholds!"
}

validate_report "$1"