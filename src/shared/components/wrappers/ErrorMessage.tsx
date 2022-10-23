import EmptyListPaper from "./EmptyListPaper"
import errorImage from "@/assets/images/loan_issued_smile.gif"

const ErrorMessage = () => {
  return <EmptyListPaper image={errorImage} title="Произошла ошибка" />
}

export default ErrorMessage
