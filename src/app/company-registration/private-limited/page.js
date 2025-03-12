"use client"

import WhyChooseUs from "@/app/common/WhyChooseUs";
import DocumentRequiredInfo from "@/app/components/company-registration/private-limited/DocumentRequiredInfo";
import FAQ from "@/app/components/company-registration/private-limited/FAQ";
import Features from "@/app/components/company-registration/private-limited/Features";
import Feedback from "@/app/components/company-registration/private-limited/Feedback";
import HeroSection from "@/app/components/company-registration/private-limited/MainHeaderSection";
import PackagesSection from "@/app/components/company-registration/private-limited/PackagesSection";
import Procedure from "@/app/components/company-registration/private-limited/Procedure";
import StickySection from "@/app/components/company-registration/private-limited/StickySection";




const PrivateLimited = ()=>{
    return(
        <>
            <HeroSection/>
            <StickySection/>
            <Features/>
            <DocumentRequiredInfo/>
            <Procedure/>
            <FAQ/>
            <Feedback/>
            <PackagesSection/>
            <WhyChooseUs/>
        </>
    )
}

export default PrivateLimited;