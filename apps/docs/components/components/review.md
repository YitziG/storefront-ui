---
layout: ComponentLayout
hideBreadcrumbs: true
---
# Review

Customer review component with author, rating, date and review text.

<Generate style="height: 700px" />

## Figma design

See the design on [Figma](https://www.figma.com/file/Cx2jw34waZltkapwq7j7aT/SFUI-2-%7C-Design-Kit-(early-alpha)?node-id=13969%3A22192&t=LIzxPt9OJb9F1mXf-1)

## Props

|   Prop name    |   Type   | Default value | Possible values |
|:--------------:|:--------:|:-------------:|:---------------:|
|    `title`     | `String` |      ''       |                 |
|   `content`    | `String` |      ''       |                 |
|     `date`     | `String` |      ''       |                 |
|    `author`    | `String` |      ''       |                 |
| `showMoreText` | `String` |  `Read more`  |                 |
| `showLessText` | `String` |  `Read less`  |                 |
|  `charLimit`   | `Number` |               |                 |
<!-- react -->
|    `slotRating`    | `ReactNode` |               |                 |
| `slotAuthorSuffix` | `ReactNode` |               |                 |
|   `slotActions`    | `ReactNode` |               |                 |
|    `className`     |  `String`   |               |                 |
<!-- end react -->
<!-- vue -->
## Slots

|   Slot name    |        Description        |
|:--------------:|:-------------------------:|
|    `rating`    | slot for rating component |
| `authorSuffix` |       slot for icon       |
|   `actions`    |     slot for actions      |
<!-- end vue -->

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfReview/VsfReview.vue
<!-- end vue -->
<!-- react -->
<<< ../../../packages/sfui/frameworks/react/components/VsfReview/VsfReview.tsx
<!-- end react -->