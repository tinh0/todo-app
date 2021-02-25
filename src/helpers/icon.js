import { faCircle as faCircleRegular } from '@fortawesome/free-regular-svg-icons'
import {
  faTrash,
  faEdit,
  faCheckSquare,
  faCircle
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(
    faTrash,
    faEdit,
    faCheckSquare,
    faCircle,
    faCircleRegular
  )
};

export default Icons;