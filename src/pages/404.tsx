import { HttpStatusCode } from "axios";
import { CustomError } from "../components/globals/CustomError/CustomError";

export default function Custom404() {
  return (
    <CustomError
      statusCode={HttpStatusCode.NotFound}
      message="Страница не найдена или не существует"
    />
  );
}
