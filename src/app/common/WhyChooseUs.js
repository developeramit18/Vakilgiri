import { WhyChooseUsCardData } from "../shared/WhyChooseUsCardData"; 
import SectionTitle from "../components/subComponents/SectionTitle";
import WhyChooseUsCard from "../components/subComponents/WhyChooseUsCard"; 

export default function WhyChooseUs() {
  return (
    <div className="w-full bg-[#F5E3E3] text-center py-10 pb-6">
      <SectionTitle heading={'Why Choose Us?'} subHeading={'Best Online Company Registration in India'} />
      <div className="w-full max-w-[83%] mx-auto grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-5 justify-center my-8 ">
        {
        WhyChooseUsCardData && WhyChooseUsCardData.length>0 && (
          WhyChooseUsCardData.map(data=>(
            <WhyChooseUsCard key={data.id} icon={<data.icon className='text-primary text-5xl mx-auto' />} title={data.title} article={data.article} />
          ))
        )
        }
      </div>
    </div>
  )
}
