import Nav from './Nav'
import {Stack} from "react-bootstrap"

const Header = () => {
  return (
    <Stack direction="horizontal" gap={3} className="text-success">
  <h1 className="fs-1">LB</h1>
  <div className="ms-auto"><Nav /></div>
</Stack>
  )
}

export default Header
