---
title: "Des petites fonctions pures"
description: "Pourquoi extraire la logique dans des fonctions sans effet de bord rend le code plus simple à tester et à relire."
pubDate: 2026-08-20
tags: [programmation, tutoriel]
---

Une fonction pure renvoie toujours le même résultat pour les mêmes arguments et ne touche à rien d'extérieur. C'est une contrainte modeste qui change beaucoup de choses.

## Avant

```ts
function applyDiscount(order: Order) {
  if (order.customer.isMember) {
    order.total = order.total * 0.9;
    save(order);
  }
}
```

La logique de calcul, la mutation et la persistance sont mélangées : pour tester le calcul, il faut simuler `save`.

## Après

```ts
export const discounted = (total: number, isMember: boolean): number =>
  isMember ? total * 0.9 : total;

function applyDiscount(order: Order) {
  save({ ...order, total: discounted(order.total, order.customer.isMember) });
}
```

`discounted` se teste en une ligne, sans doublure ni base de données. Les effets restent à la périphérie, là où ils sont visibles.

## À retenir

Séparer le calcul de l'effet ne demande pas de framework, seulement l'habitude de se demander ce qui peut être extrait.
