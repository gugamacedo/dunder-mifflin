import { useRouter } from 'next/router'

const Character = () => {
  const router = useRouter() 

  return (
    <ul>
      <li>Name: {router.query.character}</li>
    </ul>
  )
}

/* export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/characters')
  const data = await res.json()

  const paths = data.map(character => {
    return { params: { name: character.name } }
  })

  
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const { name } = context.params
  const res = await fetch('http://localhost:3000/api/characters')
  const data = await res.json()

  const character = data.find(characters => characters === name)

  return {
    props: {
      character,
    },
  }
} */

export default Character