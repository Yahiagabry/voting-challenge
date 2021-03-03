import { mount } from '@vue/test-utils'
import RestaurantsList from './RestaurantsList.vue'
import AddRestaurant from './AddRestaurant.vue'

describe('Task component unit testing', () => {
    test('is a view instance', () => {
        const wrapper = mount(AddRestaurant, {
            propsData: {
                task: {
                    name: "task 1",
                    completed: false
                }
            }
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    test('calling vote function when click on vote button', () => {
        const wrapper = mount(AddRestaurant, {
            propsData: {
                task: {
                    name: "task 2",
                    completed: false
                }
            }
        });
        const onSubmit = jest.fn();

        wrapper.setMethods({
            onSubmit: onSubmit
        });
        wrapper.find('input.btn-primary').trigger('click');

        expect(onSubmit).toHaveBeenCalled();
    });
})