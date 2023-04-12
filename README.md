# React Global State: Lights

In this challenge you will automate the lights in your house… well, at least in your browser.

- Create a function to toggle the `isOn` property of a light based on its `id` and pass the handler function down to the `Light` components.
- In the `Lights` component pass down the `onToggle` prop to the `Light` component using an inline function to pass in the `id` of the light:

  ```js
  onToggle={() => handleToggle(light.id)}
  ```

  This of course depends on the name of the handle function you choose.

> 💡 Just pick any `id`s you want for the lights. `"1"`, `"2"`, `"3"`,… is probably the easiest.

> ✨ Your app should now work as it did before, but the state is now shared between the components.

### Counting the Lights

- The count of turned on lights on the home page (`/`) is still not working.
- Create a value derived from the state and use it to display the count of turned on lights on the home page (`/`).

> 💡 To derive a value from state you do **not** need state or effects.

### Creating the Quick Actions

- The buttons on the `/actions` page are also not yet functional.
- Create two handler functions to toggle all lights on and off.
- Pass them down to the `QuickActions` component and use them to toggle all lights on and off.
- Bonus: Make the `Button`s `disabled` if their action would not do anything:
  - "Turn all lights off" should be disabled if all lights are off
  - "Turn all lights on" should be disabled if all lights are on

### Bonus: Dimming the Background

- The `Layout` component accepts a `isDimmed` prop that can be used to dim the background.
- Set the `isDimmed` prop to `true` if all lights are turned off. 🌚

## Notes

- You'll have to touch the files inside `components` and `pages`. All the styles are already done, so you can focus on the functional parts.

## Development

### CodeSandbox

Select the "Browser" tab to view this project. If this project contains tests, select the "Tests" tab to check your progress.

> 💡 Please note that Next.js support on CodeSandbox is not great.

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following commands:

- `npm run dev` to start the development server
- `npm run build` to create a production build
- `npm run start` to start the production build
- `npm run test` to run the tests in watch mode (if available)

> 💡 This project requires a bundler. You can use `npm run dev` to start the development server. You can then view the project in the browser at `http://localhost:3000`. The Live Preview Extension for Visual Studio Code will **not** work for this project.
