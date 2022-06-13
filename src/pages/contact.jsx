const Contact = () => {
  return (
    <>
      <h1>Contact</h1>
    </>
  )
}

export default Contact

/*
export default function Contact({ characters }) {
  return (
    <ul>
      {characters.map((character) => character.team === 'sales' && (
        <li key={character.name}>{character.name}</li>
      ))}
    </ul>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/characters')
  const characters = await res.json()

  return {
    props: {
      characters,
    },
  }
}
*/