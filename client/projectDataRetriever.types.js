// @flow
export type Button = {
  id: number,
  title: string,
  link: string
}
export type Card = {
  id: number,
  title: string,
  description: string,
  image: [string, string],
  controls: Array<Button>
}
export type allCards = Array<Card>
export type allCardsQuery = {
  loading?: boolean,
  error?: string,
  allCards: allCards
}
