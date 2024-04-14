const { gql, default: request } = require("graphql-request");

const MASTER_URL=process.env.NEXT_PUBLIC_BACKEND_API_URL;

const GetCategory=async()=>{
    const query=gql`
    query Categories {
        categories(first: 50) {
          id
          name
          slug
          icon {
            url
          }
        }
      }
      
    `

    const result=await request(MASTER_URL,query)
    return result;
}

const GetBuisness=async(category)=>{
  const query=gql`
  query GetBuisness {
    restaurants(where: {categories_some: {slug: "`+category+`"}}) {
      aboutUs
      address
      banner {
        url
      }
      categories {
        name
      }
      id
      name
      restroType
      slug
      workingHours
    }
  }
  `
  const result=await request(MASTER_URL,query)
    return result;
}


const GetBuisnessDetail=async(buisnessSlug)=>{
  const query = gql`
  query RestaurantDetail {
    restaurant(where: {slug: "`+buisnessSlug+`"}) {
      aboutUs
      address
      banner {
        url
      }
      categories {
        name
      }
      id
      name
      restroType
      slug
      workingHours
      menu {
        ... on Menu {
          id
          category
          menuItem {
            ... on MenuItem {
              id
              name
              description
              price
              productImage {
                url
              }
            }
          }
        }
      }
    }
  }  
  `
  const result=await request(MASTER_URL,query)
    return result;
}

export default{
  GetCategory,
  GetBuisness,
  GetBuisnessDetail
}