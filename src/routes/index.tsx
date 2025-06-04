import { createFileRoute } from '@tanstack/react-router'

import recipeImage from '../assets/Pancakes.png'

import like from '../assets/corazonVacio.svg'

import ButtonCard from '../components/ui/ButtonCard'

import Container from '../components/ui/Container'

const buttonPropsCards = {
  heart: like,
  style: ""
}

const headerProps = {
  title:  'Swapchef'
}

const recipeCards = [
  {
    image: recipeImage,
    category: 'Desayuno' as const,
    name: 'Pancakes',
    autor: 'Krysten V.',
    button: <ButtonCard {...buttonPropsCards} />
  },
  {
    image: recipeImage,
    category: 'Comidas' as const,
    name: 'Tacos',
    autor: 'Luis G.',
    button: <ButtonCard {...buttonPropsCards} />
  },
  {
    image: recipeImage,
    category: 'Vegetariano' as const,
    name: 'Ensalada Verde',
    autor: 'Ana P.',
    button: <ButtonCard {...buttonPropsCards} />
  }
];

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Container header={headerProps} 
    cards={recipeCards} />
  )
}
