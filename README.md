# LMS Frontend

### Setup Instruction

1. Clone the project

```

git clone https://github.com/Nihal-patel9/LMS.git
```

2. Move into the directory

```

  cd Frontend
```

3. install dependencies

```
   npm i
```

4. run the server

```
   npm run dev
```

### Setup instruction for TailwindCSS

1. Install tailwind

```
    npm install -D tailwindcss postcss autoprefixer
```

2. Create tailwind config file

```
    npx tailwindcss init -p
```

3. Add file extensions to tailwind config file in the content property

```
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
```

4. Add the tailwind directives at the top of the `index.css` file

```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```
