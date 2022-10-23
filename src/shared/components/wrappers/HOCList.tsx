import { useEffect, ReactNode } from "react"
import Loading from "@/shared/components/ui/Loading"
import EmptyListPaper from "./EmptyListPaper"
import ErrorMessage from "./ErrorMessage"
import errorImage from "@/assets/images/loan_issued_smile.gif"

const HOCList = ({
  children,
  isLoading,
  isError,
  isSuccess,
  length,
  noLengthMessage,
  createLink,
  createText,
}: {
  children: ReactNode
  isLoading: boolean
  isError: boolean
  isSuccess: boolean
  length: number
  noLengthMessage: string
  createLink?: string
  createText?: string
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])
  if (isLoading) return <Loading />
  else if (isError) return <ErrorMessage />
  else if (isSuccess && length < 1)
    return (
      <EmptyListPaper
        createLink={createLink}
        createText={createText}
        image={errorImage}
        title={noLengthMessage}
      />
    )
  return <>{children}</>
}

export default HOCList
