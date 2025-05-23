import { HttpStatusCode } from "axios";
import { CustomError } from "../components/globals/CustomError/CustomError";

export default function Custom500() {
  return (
    <CustomError
      statusCode={HttpStatusCode.InternalServerError}
      message="Извините, произошла внутренняя ошибка сервера. Попробуйте зайти позже"
    />
  );
}
