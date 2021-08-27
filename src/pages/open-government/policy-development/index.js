import React from "react"
import {Link, graphql,navigate} from 'gatsby'

/*shared-components*/
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import GridDisplay from "../../../components/shared-components/GridDisplay"
import Form from "../../../components/shared-components/Form"
import PostsCards from "../../../components/home-components/PostsCards"
/*specific-components*/
import Potential from "../../../components/lp-components/policy-development/Potential"
import ProductCards from '../../../components/lp-components/policy-development/ProductCards';
import HowWeDoIt from '../../../components/lp-components/policy-development/HowWeDoIt';
import Breadcrumbs from '../../../components/breadcrumbs'
/*assets*/
import sectionOneImg from "../../../assets/lp-policy_development/heroImg.png"



const LPPolicyDevelopment = ({data,location}) => {
  const postsCategories =[
    {
      name:"Open Banking / Open Finance",
      url:"/open-banking-posts"
    },
    {
      name:"Open Government",
      url:"/open-government-posts"
    },
    {
      name:"Open Health",
      url:"/open-health-posts"
    }

  ]
  const handleCategory = (selectedCategory)=>{
    const found = postsCategories.find(cat => cat.name === selectedCategory.name);
    const goTo = found ? navigate(`${found.url}`) : null
    return goTo
  }
  return(


  <Layout>
    <Breadcrumbs location={location}/>
    <SEO title="Policy Development" />
    <section className="hero-data-governance py-10">
        <div className="container mx-auto grid md:grid-cols-2 grid-cols-1 items-center px-5 ">
          <div className="hero-data-governance-left">
            <h3 className="font-black text-3xl ">Policy development
      and advocacy services</h3>
            <p className="text-2xl">
            Join us as we map and respond
      to emerging policy opportunities
            </p>
          </div>
          <div className="hero-data-governance-right flex justify-end">
            <img src={sectionOneImg}></img>
          </div>
        </div>
      </section>


    <Potential />

    <Form
      formClass="text-center mt-5 mx-auto overflow-hidden"
      formID="lp-training-form"
      titleClass="text-base"
      title="Sign up now to learn about the upcoming global policy agenda"
      iframeId="submitMailerlite"
      iframeSrc={"https://landing.mailerlite.com/webforms/landing/b9q0r6"}
    />

    <HowWeDoIt/>
    <ProductCards/>
    <section className="mt-6  py-6 px-5 bg-whitePurple">
      <div className="container mx-auto">
      <h2 className="text-center font-black">Current policy consultation opportunities</h2>
      <iframe src="https://airtable.com/embed/shrHdOaxfkJmBJUno?backgroundColor=red&viewControls=on" frameborder="0"  width="100%" height="533" className="my-8 mx-auto px-8">
      </iframe>
      </div>
    </section>


    <section className=" bg-lightPurple py-10">
          
    <div className="blog-cards container mx-auto all-blog-content my-20 px-5">
      <h3 className="text-center font-black my-5 text-white">{`See our recent submissions\n and contribute to our next response`}</h3>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          {data?data.allStrapiPost.edges.map((post, index) => {
            while (index < 3 && post.node.staging ===false) {
              return (
                <>
                  <div className="px-2 rounded-xl bg-gray-50 shadow py-2 top-blog-cards flex flex-col justify-between">
                    <div className="top-blog-card-img-container flex justify-center max-h-56">
                      {post.node.featured_image && post.node.featured_image ? (
                        <Link to={`/${post.node.slug}`}>
                          {" "}
                          <img src={post.node.featured_image.childImageSharp.gatsbyImageData.images.fallback.src} className="block object-contain h-48 w-full"/>
                        </Link>
                      ) : null}
                    </div>
                    <Link to={`/${post.node.slug}`}><h5 className="text-lg font-bold leading-5 mt-5">
                      {post.node.title}
                    </h5></Link>
                    <span className="text-gray-600 mr-3 small-text mt-1">
                      Published{" "}
                      {new Date(post.node.publishing_date).toDateString()}
                    </span>{" "}
                    <div className="text-gray-600 text-sm font-medium flex mb-0 mt-0">
                      <small className="small-text mr-1">{`Writen by `} </small>
                      {post.node.user.length === 1 ? (
                        <Link
                          className="hover:text-black transition duration-300 ease-in-out small-text mr-1"
                          to={`/author/${post.node.user[0].id}`}
                        >{` ${post.node.user[0].username}`}</Link>
                      ) : post.node.user.length > 1 ? (
                        post.node.user.map((x, index) => (
                          <Link
                            to={`/author/${post.node.user[index].id}`}
                            className="hover:text-black transition duration-300 ease-in-out small-text mr-1"
                          >
                            {x.username}{" "}
                            {index < post.node.user.length - 1 ? " & " : ""}
                          </Link>
                        ))
                      ) : null}
                    </div>
                    <div>
                      {post.node.categories.map(cat => {
                        return (
                          <div key={post.node.id} className="">
                            <button
                              to={cat.name}
                              className={`bg-${cat.name} py-0 px-2 rounded text-white small-text text-xs`}
                              onClick={()=> handleCategory(cat)}
                            >
                              {cat.name}
                            </button>
                          </div>
                        )
                      })}
                    </div>
                    <p className="text-xs leading-5 my-1 small-text">
                      {post.node.excerpt ? post.node.excerpt : ""}
                    </p>
                  </div>
                </>
              )
            }
          }):null}
        </div>
        </div>


        </section>


    <Form
      formClass="text-center my-5 mx-auto overflow-hidden"
      formID="lp-training-form"
      titleClass="text-base"
      title="Sign up now to learn about the upcoming global policy agenda"
      iframeId="submitMailerlite"
      iframeSrc={"https://landing.mailerlite.com/webforms/landing/b9q0r6"}
    />
  </Layout>
)
        }

export default LPPolicyDevelopment


export const OGPolicyPostIndex = graphql`
query OGPolicyPostIndex {
  allStrapiPost(limit:3, filter: {categories: {elemMatch: {name: {eq: "Open Government"}}}}) {
    edges {
      node {
        categories {
          name
        }
        id
        slug
        staging
        is_featured
        publishing_date
        tags {
          name
        }
        featured_image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        title
        updated_at
        user {
          id
          username
        }
      }
    }
  }
}
`