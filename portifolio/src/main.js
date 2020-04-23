import api from './api';

class App {
    constructor() {
        this.user = [];
        this.userId = '';
        this.repositories = [];

        this.totalPages = 1000;
        this.currentPage = 0;
        this.nextPage = 0;

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

        for (let index = 1; index <= this.totalPages; index++) {

            let params = {
                page: index,
            }

            try {
                const response = await api.get(`users/${this.userId}/projects`, { params });

                // const total = response.headers['x-total'];

                this.totalPages = parseInt(response.headers['x-total-pages']);

                //const perPage = response.headers['x-per-page'];

                // this.currentPage = parseInt(response.headers['x-page']);

                //const prevPage = response.headers['x-prev-page'];

                // this.nextPage = parseInt(response.headers['x-next-page']);

                // console.log(total);
                console.log(this.totalPages);
                // console.log(perPage);
                // console.log(this.currentPage);
                // console.log(prevPage);
                // console.log(this.nextPage);

                var repos = response.data.filter(repo => {
                    return repo.tag_list.find(tag => {
                        return (
                            tag === 'Javascript' ||
                            tag === 'ES6+' ||
                            tag === 'Html' ||
                            tag === 'Css' ||
                            tag === 'Php' ||
                            tag === 'Nodejs' ||
                            tag === 'Reactjs' ||
                            tag === 'React Native' ||
                            tag === 'Angularjs' ||
                            tag === 'Vuejs'
                        );
                    });
                });

                this.repositories = [...this.repositories, ...repos];
                console.log(this.repositories);
            } catch (error) {
                alert('O repositório não existe');
            }
        };

        this.render();
    }

    render () {
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {
            let boxImgEl =document.createElement('div');
            boxImgEl.className = 'boxImg';

            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            boxImgEl.appendChild(imgEl);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let techsEl = document.createElement('p');
            techsEl.appendChild(document.createTextNode('Tecnologias Utilizadas'));
            techsEl.className = 'techs';

            let listTagsEl = document.createElement('ul');
            listTagsEl.className = 'list-tags';

            repo.tag_list.forEach(tag => {
                let tagsEl = document.createElement('li');
                tagsEl.appendChild(document.createTextNode(tag));
                tagsEl.className = 'tag';
                listTagsEl.appendChild(tagsEl);
            });

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.appendChild(document.createTextNode('Acessar projeto'));
            linkEl.setAttribute('href', repo.web_url);

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(boxImgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(techsEl);
            listItemEl.appendChild(listTagsEl);
            listItemEl.appendChild(linkEl);

            listItemEl.className = 'repo';

            this.listEl.appendChild(listItemEl);
        });
    }
}

new App();