import Home from '@/components/home/Home'
import Cards from '@/components/cards/Cards'
import Category from '@/components/categories/Category'



const HomePage = () => {



  return (
    <div>
        <Home />

      <div className=' mt-20 cards bg-[ghostwhite] p-4'>
        <Cards />
      </div>

      <div className=' mt-20 bg-[ghostwhite] category p-4 pb-32'>
        <Category />
      </div>

    </div>
  )
}

export default HomePage