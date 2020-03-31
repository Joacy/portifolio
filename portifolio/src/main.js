import api from './api';

class App {
    constructor() {
        this.user = [];
        this.userId = '';
        this.repositories = [];

        this.listEl = document.getElementById('repo-list');

        this.getUser();
    }

    async getUser () {
        try {
            const params = {
                username: 'JoacyMS',
            };

            const response = await api.get('users', { params });

            this.user = response.data[0];
            this.userId = this.user.id;

            console.log(this.user);
        } catch (error) {
            alert('O usuário não existe');
        }

        this.getRepositories();
    }

    async getRepositories () {
        try {
            const params = {
                page: 1,
            };

            const response = await api.get(`users/${this.userId}/projects`, { params });

            this.repositories = response.data;
            console.log(this.repositories);
        } catch (error) {
            alert('O repositório não existe');
        }

        this.render();
    }

    render () {
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', 'https://secure.gravatar.com/avatar/d8d0406d67a67093f4429fecac92ec16?s=80&d=identicon');

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.appendChild(document.createTextNode('Acessar'));
            linkEl.setAttribute('href', repo.web_url);

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });
    }
}

new App();