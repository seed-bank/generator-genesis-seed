# Generator Genesis Seed Project

This project works allows the creation of other yeoman generator projects. Its core engine is from the [genesis-seed-tiller]{https://github.com/seed-bank/genesis-seed-tiller} lib. Additionally, when this generator generates projects, it leverages the genesis-seed-tiller project for the new project.

## Why

I am tired of writting the same generator over and over. With this project simply generate the configuration, generate the project and add the templates you require. Pure configuration. Zero knowledge of Yeoman or even javascript.

## Tutorial

1. Make sure you have Yeoman installed.
```
npm install -g yo
```

2. Install the generator globally.
```
npm install -g generator-genesis-seed
```

3. Change to a directory of your choosing. 
4. Generate the genesis.json file.
```
yo genesis-seed:init
``` 

5. Change the values in the generated genesis.json file.

6. Run the generator.
```
yo genesis-seed
```

7. Start adding your template files.

8. Profit.
