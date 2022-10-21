const Component = (props) => {
  console.log(props)
  return (
    <>
      hello
      {JSON.stringify(props)}
    </>
  )
}

export default Component