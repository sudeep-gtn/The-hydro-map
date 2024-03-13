import dynamic from 'next/dynamic'
// import OpenStreetMap from '../component/OpenStreetMap'
const Map2 = dynamic(() => import('../../components/Map'), {
  ssr: false,
})
const index = () => {
  return (
    <>
      <h1 className='text-center'>OpenStreetMap</h1>
      <Map2 />
    </>
  )
}
export default index