<p align="center">
</p>

## Earcandy (Built for HackForCreators)
<blockquote>Ear Candy: The Audio Book You Can't Put Down</blockquote>

📃Table of contents:
<table>
<tr>
<td>1.</td>
<td> What is Earcandy</td>
</tr>
<tr>
<td>2.</td>
<td>Inspiration</td>
</tr>
<tr>
<td>3.</td>
<td> Our Tech Stack </td>
</tr>
<tr>
<td>4.</td>
<td>Contributions</td>
</tr>
<td>6.</td>
<td>References </td>
</tr>

</table>

## What is Earcandy?
An audiobook platform where users can create and share their own audiobooks. This platform aims to provide a space for individuals to showcase their unique voices, share their stories, and connect with like-minded individuals.

## 📸 Screenshots

|||
|:----------------------------------------:|:-----------------------------------------:|
|![Screenshot from 2023-03-05 15-47-01](https://user-images.githubusercontent.com/95094057/222954538-906a68d7-ac0b-4065-9756-c66efd0f42cb.png)
| ![Screenshot from 2023-03-05 15-47-08](https://user-images.githubusercontent.com/95094057/222954520-415817a0-0ce3-4715-abbd-bcb15e6d5a33.png)
|![Screenshot from 2023-03-05 15-49-54](https://user-images.githubusercontent.com/95094057/222954623-34a7afcc-1587-4c14-b1aa-4a2591a8c8da.png)


## 🍎Inspiration
With our user-friendly interface, users can easily upload and manage their content in parts, and connect with others through social media features such as following, liking, and commenting. Our platform provides various categories to choose from, making it simple for listeners to discover audiobooks that interest them.

#### 🥗Features
1. User-friendly interface
2. Social media integration
3. Customizable categories
4. Part-by-part book upload
5. Community engagement.

## 🤖Our Tech Stack
To begin with, first, we did User Research. Next, we created the user flow and functionality. This led us to high-fidelity design and implementation. Here is our tech stack.

1. Figma for UI designing. 
2. Next js for frontend development.
3. Typescript for development.
4. Auth0 for Authentication purpose. 
5. Supabase for database.
6. Tailwind for Styling
7. Material UI for UI Components.


* To check deployment, visit this link 👉 [Earcandy](https://www.ear-candy.us)

## Installation

> This project is built on nextJS 13 experimental version

1. Fork the repo into your account

![Fork Image](https://i.imgur.com/mNw6zxu.png)

2. Clone the project into your local machine

```sh
git clone https://github.com/<Your-name>/Earcandy.git
```

3. Navigate the folder

```sh
cd earcandy
```

3. Install the dependencies

```sh
yarn
```
4. Make .env file in root directory with these variables

```sh
# Auth0 env
AUTH0_SECRET=<>
AUTH0_BASE_URL=http://localhost:3000
AUTH0_ISSUER_BASE_URL=<>
AUTH0_CLIENT_ID=<>
AUTH0_CLIENT_SECRET=<>

# supabase env
NEXT_PUBLIC_ANON_KEY=<>
NEXT_PUBLIC_SUPABASE_URL=<>
NEXT_PUBLIC_AUDIO_BASE_URL=https://pvvbzesrxmiuksjjhqac.supabase.co/storage/v1/object/public/audio/
```

5. Run the project on local machine

```sh
yarn dev
```
6. Every time you start making changes to your forked repo make sure it's in sync with the original repo

## Contributing Guidelines

Thank you for considering to contribute to this project.

### What do I need to know to contribute?

This project is in a very early stage so anybody who's familiar with **ReactJS**/**NextJS**/**Typescript**/**TailwindCSS** can contribute. If you don't feel ready to make a contribution yet, no problem at all. You can also contribute to this `ReadMe` section or the **Documentation** part of our project.

If you are interested to contribute and want to learn more about the technologies that are used in this project, checkout the links below.

- [ReactJS Official Docs](https://reactjs.org/docs/getting-started.html)
- [NextJS Documentation](https://beta.nextjs.org/docs)
- [Typescript Documentaion](https://www.typescriptlang.org/docs/)
- [TailwindCSS Docs](https://tailwindcss.com/docs/installation)
- [Material UI Documentaion](https://mui.com/material-ui/getting-started/overview/)

### How to make a Contribution?

Never made an open source contribution before? And wondering how to contribute to this project?
No worries! Here's a quick guide,

1. Choose any feature/bug you wish to contribute to.
2. Fork the repository into your own account.
3. Clone the repo you have forked in your local machine using `git clone https://github.com/<Your-name>/Earcandy.git`
4. Create a new branch for your fix by using the command `git checkout -b YourName-branch-name `
5. Make the changes you wish to do and stage them using the command `git add files-you-have-changed ` or use `git add .`
6. Use the command `git commit -m "Short description of the changes"` to describe the changes you have done with a message.
7. Push the changes to your remote repository using `git push origin your-branch-name`
8. Submit a PR(pull request) to the upstream repository `Somidh/Earcandy` with a title and a small description.
9. Wait for the pull request to be reviewed by us.
10. Make appropriate changes if the maintainer recommends you to and submit it.
11. Await for your contribution to be merged into the repository.

Checkout the [Contributing.md](CONTRIBUTING.md) file before contributing.


## License

[MIT](LICENSE.md)


## Thanks to all the Contributors ❤️

<a href = "https://github.com/Somidh/Earcandy/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=Somidh/Earcandy"/>
</a>


## Your Support means a lot

Give a ⭐ to the project if you liked it. :)
