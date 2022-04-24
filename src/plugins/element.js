import Vue from "vue";
import {
  Button,
  Input,
  Avatar,
  Badge,
  Carousel,
  CarouselItem,
  Message,
  MessageBox,
} from "element-ui";

Vue.use(Button);
Vue.use(Input);
Vue.use(Avatar);
Vue.use(Badge);
Vue.use(Carousel);
Vue.use(CarouselItem);

Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;
