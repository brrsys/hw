const url = 'https://github.com/brrsys/hw/graphql'

const query = gql`
{
  posts(orderBy: [{views: desc}], limit: 5) {
    id
    title
    views
  }
}
`
