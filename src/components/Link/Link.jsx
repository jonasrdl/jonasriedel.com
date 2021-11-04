const Link = (props) => {
  return (
    <a href={props.url} target='_blank' rel='noreferrer'>
      {props.text}
    </a>
  )
}

export default Link
