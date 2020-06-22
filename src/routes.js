import Home from './components/Home.vue';
import Contact from './components/Contact.vue';
import ProductGrid from './components/product/ProductGrid.vue';

export const routes = [
    { path: '/', component: Home},
    { path: '/kontakt', component: Contact},
    { path: '/nasze-produkty', component: ProductGrid}
]