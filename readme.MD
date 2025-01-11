# Profile Card React V1

This is a simple profile card project using React. Below are the instructions on how to set up and run the project.

## Requirements

- Node.js (latest version recommended)
- npm (package manager)

## How to Set Up

1. Clone this repository:
   ```bash
   git clone https://github.com/KauaZs/profile-card
   ```

2. Navigate to the project directory:
   ```bash
   cd profile-card
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. To set up the name, avatar, and banner for the profile, edit the `src/config/config.ts` file with your desired values.

   Example configuration in `src/config/config.ts`:
   ```ts
   export default = {
      profileOptions: {
        displayName: "YourName",  // Replace with your profile name
        avatar_url: "https://i.imgur.com/UiYbFjI.png",  // Replace with your avatar URL
        about: "About",  // Replace with your bio or about text
        banner: "https://i.imgur.com/24eSA7k.gif"  // Replace with your banner URL
    },
    profileLinks: {
        discord: "https://discord.com/users/573812452165156864",  // Replace with your Discord profile link
        github: "https://github.com/KauaZs"  // Replace with your GitHub profile link
    }
   };
   ```

## How to Run the Project

After configuring the data in the `config.ts` file, run the following command to start the development server:

```bash
npm run start
```

The application will start at `http://localhost:3000` in your browser.


## License

This project is open-source and distributed under the MIT license.
