import dynamic from 'next/dynamic'
import Nav from '../../components/navb/Nav'
// import MyMapComponent from '../../components/Map'
const Map = dynamic(() => import('../../components/maps/Map'), {
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