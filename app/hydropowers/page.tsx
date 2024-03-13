import dynamic from 'next/dynamic'
import Nav from '../../components/Nav'
// import MyMapComponent from '../../components/Map'
const Map = dynamic(() => import('../../components/Map'), {
  ssr: false,
})
const index = () => {
  return (
    <>
      <Nav />
      <Map />
    </>
  )
}
export default index