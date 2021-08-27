import React from 'react'
import {Link} from 'gatsby'
// import data from "../../data/product-stream/data.json"
import GridDisplay from "../../components/shared-components/GridDisplay"
/*specific-components*/
import SectorSubCards from "../../components/product-streams/sectorSubCards"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
/*assets*/
import openHealthImg from "../../assets/product-streams/open_health.svg"


import AnanlistAsServiceImg from '../../assets/product-streams/analyst-as-a-service.svg'
import BlogImg from '../../assets/product-streams/blogs_and_articles.svg'
import OpenEcoIMg from '../../assets/product-streams/open_ecosystem_mapping.svg'
import PlatFormImg from '../../assets/product-streams/platform_mindset_training_for_banks.svg'
import QuarterlyImg from '../../assets/product-streams/quarterly_trends_report.svg'
import StateImg from '../../assets/product-streams/state_of_the_market_reports.svg'
import Breadcrumbs from '../../components/breadcrumbs'
import SEO from '../../components/seo'
const data = {
  "OpenHealth": {
    "elements": [
      {
        "img": AnanlistAsServiceImg,
        "title": "Data Governance",
        "paragraph": "Create a data governance and data stewardship system for your agency",
        "color": "#87ACFC40",
        "url":"/open-health/data-governance"
      },
      {
        "img": BlogImg,
        "title": "Blogs and \nArticles",
        "paragraph": "Read our latest news and articles",
        "color": "#87ACFC40",
        "url":"/open-health/open-health-posts"
      },
      {
        "img": OpenEcoIMg,
        "title": "Open Ecosystem\nMapping",
        "paragraph": "Analyse the open banking / open finance ecosystem from your perspective and gain actionable insights",
        "color": "#87ACFC40",
        "url":"/open-health/open-ecosystem-mapping"
      },
      {
        "img": PlatFormImg,
        "title": "Data Stewardship Training and Mentoring",
        "paragraph": "Learn how to collect, manage, analyse and reuse data",
        "color": "#87ACFC40",
        "url":"/open-health/data-stewardship-training-and-mentoring"
      },
      {
        "img": QuarterlyImg,
        "title": "Quarterly Trends\nReport",
        "paragraph": "Coming Soon",
        "color": "#87ACFC40"
      },
      {
        "img": StateImg,
        "title": "State of the Market\nReports",
        "paragraph": "Coming Soon",
        "color": "#87ACFC40"
      }
    ]
  },
  
}

export default function openHealth({location}) {
    return (
        <Layout>
          <SEO title="Open Health"/>
          <Breadcrumbs location={location}/>
          <div className="container mx-auto">
                <div className="flex md:flex-nowrap flex-wrap mt-10 mb-5 items-center">
                    <div className="labs-hero-left md:w-3/5 w:1/1 md:p-0 p-5">
                        <h3 className="text-3xl font-black ">Open Health</h3>
                        <p>Supporting community-based health organisations with data governance and data management.</p>
                        <p>Mapping the health data and emerging health tech open ecosystem.</p>
                    </div>
                    <div className="labs-hero-right md:w-2/5 flex justify-end">
                 {/*  <img src="../../assets/product-streams/open_banking-open_finance" alt="" /> */}
                  <StaticImage src="../../assets/product-streams/open_health.png" placeholder="blurred" /> 
                    </div>
                </div>
          </div>
            <div id="openHealth">
        <SectorSubCards
          data={data["OpenHealth"]}
          className="my-0 md:mx-8 mx-2 py-0  flex flex-wrap flex-col sm:flex-row justify-between text-sm items-center"
        />
      </div>
    
        </Layout>
    )
}





