import { Component } from 'react';
import { projects } from '../data';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        // Получаем уникальные категории + добавляем "All"
        const categories = [...new Set(projects.map(p => p.category))];
        const filters = ['All', ...categories];

        this.state = {
            filters,
            selectedFilter: 'All',
            projects
        };
    }

    handleFilterSelect = (filter) => {
        this.setState({ selectedFilter: filter });
    };

    render() {
        const { selectedFilter, filters, projects } = this.state;

        // Фильтруем проекты
        const filteredProjects =
            selectedFilter === 'All'
                ? projects
                : projects.filter(p => p.category === selectedFilter);

        return (
            <div className="container">
                <Toolbar
                    filters={filters}
                    selected={selectedFilter}
                    onSelectFilter={this.handleFilterSelect}
                />
                <ProjectList projects={filteredProjects} />
            </div>
        );
    }
}

export default Portfolio;