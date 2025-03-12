import { FaCaretDown, FaCaretRight } from "react-icons/fa";
export const HeaderLinks = [
    {
        id:'1',
        title:'Start a Business',
        dropdownIcon:FaCaretDown,
        dropdownLinks:[
            {
                id:'1.1',
                title:'Private Limited Company Registration',
                link:'/company-registration/private-limited'
            },
            {
                id:'1.2',
                title:'One Person Company Registration',
                link:'/'
            },
            {
                id:'1.3',
                title:'LLP Registration',
                link:'/'
            },
            {
                id:'1.4',
                title:'Section-8 Company Registration',
                link:'/'
            },
            {
                id:'1.5',
                title:'Micro Finance Company Registration',
                link:'/'
            },
            {
                id:'1.6',
                title:'Nidhi Company Registration',
                link:'/'
            },
            {
                id:'1.7',
                title:'Producer Company Registration',
                link:'/'
            },
            {
                id:'1.8',
                title:'Proprietorship Registration',
                link:'/'
            },
        ]
    },
    {
        id:'2',
        title:'Change in Business',
        dropdownIcon:FaCaretDown,
        dropdownLinks:[
            {
                id:'2.1',
                title:'Add Directors in Company',
                link:'/'
            },
            {
                id:'2.2',
                title:'Remove Directors in Company',
                link:'/'
            },
            {
                id:'2.3',
                title:'Add Partners in LLP',
                link:'/'
            },

        ]
    },
    {
        id:'3',
        title:'Tax & Compliances',
        dropdownIcon:FaCaretDown,
        dropdownLinks:[
            {
                id:'3.1',
                title:'Annual Compliances',
                link:'/',
                dropdownIcon:FaCaretRight,
                dropdownLinks:[
                    {
                        id:'3.1.1',
                        title:"For Private Limited Company",
                        link:'/',
                    },
                    {
                        id:'3.1.2',
                        title:"For Section-8 Company (NGO)",
                        link:'/',
                    },
                    {
                        id:'3.1.3',
                        title:"For LLP Firm",
                        link:'/',
                    },
                    {
                        id:'3.1.4',
                        title:"For Nidhi Company",
                        link:'/',
                    },
                ]
            },
            {
                id:'3.2',
                title:'Income Tax',
                link:'/',
                dropdownIcon:FaCaretRight,
                dropdownLinks:[
                    {
                        id:'3.2.1',
                        title:"ITR Filling",
                        link:'/',
                    }
                ]
            },
            {
                id:'3.3',
                title:'GST',
                link:'/',
                dropdownIcon:FaCaretRight,
                dropdownLinks:[
                    {
                        id:'3.3.1',
                        title:"GST Registration",
                        link:'/',
                    }
                ]
            },
            {
                id:'3.4',
                title:'Other Fillings',
                link:'/',
                dropdownIcon:FaCaretRight,
                dropdownLinks:[
                    {
                        id:'3.4.1',
                        title:"Director's KYC (DIR-3 KYC)",
                        link:'/',
                    },
                    {
                        id:'3.4.2',
                        title:"CSR 1 Form Registration",
                        link:'/',
                    },
                    {
                        id:'3.4.3',
                        title:"DIN Related Services",
                        link:'/',
                    },
                ]
            },
            {
                id:'3.5',
                title:'Digital Signature(DSC)',
                link:'/'
            },

        ]
    },
    {
        id:'4',
        title:'Government Registrations',
        dropdownIcon:FaCaretDown,
        dropdownLinks:[
            {
                id:'4.1',
                title:'12AB & 80G Registration',
                link:'/'
            },
            {
                id:'4.2',
                title:'NGO Darpan Registration',
                link:'/'
            },
            {
                id:'4.3',
                title:'Startup India Registration',
                link:'/'
            },
            {
                id:'4.4',
                title:'MSME/Udyam Registration',
                link:'/'
            },
            {
                id:'4.5',
                title:'ISO Certification',
                link:'/'
            },
            {
                id:'4.6',
                title:'Import Export License Registration',
                link:'/'
            },
            {
                id:'4.7',
                title:'Trademark',
                link:'/',
                dropdownIcon:FaCaretRight,
                dropdownLinks:[
                    {
                        id:'4.7.1',
                        title:"Trademark Registration",
                        link:'/',
                    },
                    {
                        id:'4.7.2',
                        title:"Trademark Reply Filling",
                        link:'/',
                    },
                ]
            },
            {
                id:'4.8',
                title:'FSSAI',
                link:'/',
                dropdownIcon:FaCaretRight,
                dropdownLinks:[
                    {
                        id:'4.8.1',
                        title:"FSSAI Registration",
                        link:'/',
                    }
                ]
            },

        ]
    },
    {
        id:'5',
        title:'Vakilgiri Web',
        dropdownIcon:FaCaretDown,
        dropdownLinks:[
            {
                id:'5.1',
                title:'Website Development',
                link:'/'
            },
            {
                id:'5.2',
                title:'Website Portfolio',
                link:'/'
            },
        ]
    },
    {
        id:'6',
        title:'Services',
        link:'/'
    },
]