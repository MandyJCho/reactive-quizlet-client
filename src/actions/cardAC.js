import { CARD } from './cardAC';

export function addCard(payload) {
  return {payload, type: CARD.CREATE};
}

export function updateCard(payload) {
  return {payload, type: CARD.UPDATE};
}

export function deleteCard(payload) {
  return {payload, type: CARD.DELETE};
}