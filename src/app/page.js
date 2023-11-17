import Home from '@/components/home/Home'
import Cards from '@/components/cards/Cards'
import Category from '@/components/categories/Category'



const HomePage = () => {



  return (
    <div>
      <div>
        <Home />
      </div>

      <div className=' mt-20 bg-[ghostwhite] p-4'>
        <Cards />
      </div>

      <div className=' mt-20 bg-[ghostwhite] p-4 mb-32'>
        <Category />
      </div>

    </div>
  )
}

export default HomePage