import { FC } from "react"

const Link: FC<{ url: string, text: string, className?: string }> = (props) => {
  return (
    <a href={props.url} target='_blank' rel='noreferrer'>
      {props.text}
    </a>
  )
}

export default Link
