"use-client";

import SectionTitle from "../components/subComponents/SectionTitle";
import WebsitePortfolioCard from "../components/subComponents/WebsitePortfolioCard";

const ngoWebsitePortfolioWebsites = [
    {
        id:'1',
        link:'/',
        title:'Imtiaz Foundation',
        imageUrl:'https://cdn-dnjgn.nitrocdn.com/siKGUxXVQBEUOLdTFzEgRkpREATOrYrT/assets/images/optimized/rev-1b9e448/www.vakilgiri.com/wp-content/uploads/2021/10/imtiazfoundation.org_.webp',
    },
    {
        id:'2',
        link:'/',
        title:'teachIndia Welfare foundation',
        imageUrl:'https://cdn-dnjgn.nitrocdn.com/siKGUxXVQBEUOLdTFzEgRkpREATOrYrT/assets/images/optimized/rev-1b9e448/www.vakilgiri.com/wp-content/uploads/2021/10/teachindiawelfare.com_.webp',
    },
    {
        id:'3',
        link:'/',
        title:'Jeevan Marg 888 Foundation',
        imageUrl:'https://cdn-dnjgn.nitrocdn.com/siKGUxXVQBEUOLdTFzEgRkpREATOrYrT/assets/images/optimized/rev-1b9e448/www.vakilgiri.com/wp-content/uploads/2021/10/jeevanmarg888.com_.webp',
    },
    {
        id:'4',
        link:'/',
        title:'NEW PAHAL SOCIAL WELFARE FOUNDATION',
        imageUrl:'https://cdn-dnjgn.nitrocdn.com/siKGUxXVQBEUOLdTFzEgRkpREATOrYrT/assets/images/optimized/rev-1b9e448/www.vakilgiri.com/wp-content/uploads/2021/10/newpahal.com_.webp',
    },
    {
        id:'5',
        link:'/',
        title:'HUNARDAAN SANSTHAN',
        imageUrl:'https://cdn-dnjgn.nitrocdn.com/siKGUxXVQBEUOLdTFzEgRkpREATOrYrT/assets/images/optimized/rev-1b9e448/www.vakilgiri.com/wp-content/uploads/2021/10/hunardaan.com_.webp',
    },
    {
        id:'6',
        link:'/',
        title:'SPRINGHOLY FOUNDATION',
        imageUrl:'https://cdn-dnjgn.nitrocdn.com/siKGUxXVQBEUOLdTFzEgRkpREATOrYrT/assets/images/optimized/rev-1b9e448/www.vakilgiri.com/wp-content/uploads/2021/10/springholy.com_.webp',
    },


]
const ecommerceWebsitePortfolioWebsites = [
    {
        id:'1',
        link:'/',
        title:'BANGLEWALA',
        imageUrl:'https://cdn-dnjgn.nitrocdn.com/siKGUxXVQBEUOLdTFzEgRkpREATOrYrT/assets/images/optimized/rev-1b9e448/www.vakilgiri.com/wp-content/uploads/2021/10/banglewala.com_.webp',
    },
    {
        id:'2',
        link:'/',
        title:'NUTGARDEN',
        imageUrl:'https://cdn-dnjgn.nitrocdn.com/siKGUxXVQBEUOLdTFzEgRkpREATOrYrT/assets/images/optimized/rev-1b9e448/www.vakilgiri.com/wp-content/uploads/2021/10/nut-garden.com_.webp',
    },
    {
        id:'3',
        link:'/',
        title:'MSSUS SERVICES PRIVATE LIMITED',
        imageUrl:'https://cdn-dnjgn.nitrocdn.com/siKGUxXVQBEUOLdTFzEgRkpREATOrYrT/assets/images/optimized/rev-1b9e448/www.vakilgiri.com/wp-content/uploads/2021/10/mssus.in_.webp',
    },
]

export default function page() {
  return (
    <div className="w-full max-w-[95%] mx-auto">
        <div className="mt-12">
        <SectionTitle heading={'OUR WEBSITE PORTFOLIO'} subHeading={'- Amazing Site Features And Design -'} />
        </div>
        <h4 className="w-fit mx-auto my-8 text-[22px] rounded-md leading-[1.3em] border border-[#bebaba] px-3 py-0 poppins font-semibold shadow-[0px_0px_5px_0px_rgba(0,0,0,.5)]">NGO WEBSITES PORTFOLIO</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 my-8">
        {
            ngoWebsitePortfolioWebsites.length>0 && ngoWebsitePortfolioWebsites.map((data,index)=>(
                <WebsitePortfolioCard data={data} key={data.id+index}/>
            ))
        }
        </div>
        <h4 className="w-fit mx-auto my-8 mt-10 text-[22px] rounded-md leading-[1.3em] border border-[#bebaba] px-3 py-0 poppins font-semibold shadow-[0px_0px_5px_0px_rgba(0,0,0,.5)] ">ECOMMERCE WEBSITES PORTFOLIO</h4>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 my-8">
        {
            ecommerceWebsitePortfolioWebsites.length>0 && ecommerceWebsitePortfolioWebsites.map((data,index)=>(
                <WebsitePortfolioCard data={data} key={data.id+index}/>
            ))
        }
        </div>
    </div>
  )
}
