import mongoose from "mongoose";
import User from "./User.js";
import Post from "./Post.js";
import Comment from "./Comment.js";
import Roles from "./Roles.js";

const dbConnection = async () => {
  try {
    mongoose.set("strictQuery", false);
    const connection = await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log(`Connected to database on host ${connection.connection.host}`);
  } catch (e) {
    console.log(e);
  }
};

const users = [
  {
    username: "user1",
    email: "email",
    password: "password",
    role: Roles.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    username: "user2",
    email: "email",
    password: "password",
    role: Roles.User,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    username: "user3",
    email: "email",
    password: "password",
    role: Roles.Editor,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    username: "user4",
    email: "email",
    password: "password",
    role: Roles.Guest,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
const posts = [
  {
    title: "Post 1",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, a! Culpa, voluptatibus molestiae praesentium repudiandae pariatur ipsa quae alias est fugiat illum sit perferendis sunt enim quam numquam quisquam a!" +
      "Doloribus libero fugiat, fugit saepe placeat eligendi dolor, voluptatibus unde repudiandae accusamus magnam. Commodi minima dolores minus voluptatum inventore! Reiciendis cum laboriosam, veniam deleniti minus culpa doloremque obcaecati dignissimos dolores!" +
      "Architecto aspernatur tenetur impedit odio. Ut iste dolores odio pariatur laborum explicabo reiciendis itaque deserunt iusto quo, alias aut velit veritatis quia inventore unde omnis saepe consequuntur? Distinctio, aliquid eligendi." +
      "Repellendus ea harum illum laborum eos dolores libero aspernatur sapiente aliquid quia quod nisi facere ipsum nihil omnis eveniet, in ratione culpa neque earum. Eos in ipsam libero repudiandae veritatis?" +
      "Animi, esse libero? Earum distinctio, illo cum sint at nesciunt dolorem nam perspiciatis odio, aliquid consectetur laborum. Dolorem amet quam sit voluptatem laboriosam tenetur sequi ea non adipisci aliquam? Ipsam!" +
      "Laborum, odio. Architecto sunt commodi obcaecati adipisci voluptatibus optio, numquam asperiores exercitationem maiores explicabo temporibus. Doloremque omnis, ex, pariatur sunt, at labore iste fuga reprehenderit aliquam voluptates amet id velit." +
      "Praesentium cupiditate quidem error maxime! Neque quam voluptas dignissimos voluptatem aliquid? Temporibus est, neque accusantium ut at necessitatibus. Vel praesentium, non deserunt reiciendis minus maxime consectetur ex voluptates? Cum, tempora!" +
      "Aliquid ipsam autem dolore error debitis omnis ut a incidunt rerum eaque quasi, similique obcaecati dicta in deleniti dignissimos quidem quod sequi! Facilis hic unde obcaecati quisquam, adipisci laboriosam quae." +
      "Consectetur, eius exercitationem, dolor dicta nam qui aspernatur, magni ex saepe consequatur nobis? Quis excepturi incidunt corrupti, error aspernatur alias nobis. Fuga dolores obcaecati corrupti ipsam rerum magni minus mollitia." +
      "Numquam, id ipsum. Dicta dignissimos eum quos, corporis ullam odit ex similique optio facilis autem omnis ratione, veritatis ad accusamus repudiandae laborum explicabo in ipsam eaque. Beatae eaque blanditiis illum." +
      "Consectetur ullam cumque, saepe rerum ipsum debitis qui assumenda perspiciatis ea, reiciendis quibusdam numquam inventore, esse at. Recusandae necessitatibus dolorem, eos sequi nulla ullam vero. A optio placeat earum similique?" +
      "Quidem cum iste accusamus accusantium quos possimus deserunt nihil dolor quod. Obcaecati minus alias, fuga rem architecto eligendi amet expedita, culpa corrupti non quisquam provident, corporis rerum ullam ratione consequatur!" +
      "Nihil quod, dolorem ducimus explicabo facilis deleniti, molestias sed repudiandae ipsa ratione officia vitae mollitia incidunt tenetur exercitationem iure a facere suscipit dicta? Delectus, non? Assumenda laborum eveniet quod excepturi?" +
      "Inventore, deleniti magni rem natus, recusandae corporis officiis quo eos odit non aliquid. Architecto voluptatum, sunt facilis molestiae natus voluptatem iure laborum, necessitatibus fuga iusto minima perspiciatis odio repudiandae pariatur." +
      "Ipsam repellendus rerum velit tempora accusantium? Dolore voluptatum expedita repellendus sed. A expedita nulla velit atque. Voluptatem iste delectus illum explicabo, mollitia, id, voluptate error quibusdam ipsam reprehenderit magni dolorum!" +
      "Odio, ut, ipsum sint dicta ratione architecto quo, iste error suscipit iure consequatur hic eos quod sed! Odio vitae odit, magnam tempore deleniti quibusdam illo perferendis optio aspernatur ad ex?" +
      "Excepturi nobis labore alias harum, soluta molestias repellat consequuntur odio fugit sit aut nisi optio totam quo quas obcaecati! Autem distinctio nostrum maiores consequatur quod molestias, cupiditate accusantium aliquam tenetur!" +
      "Animi quos pariatur quis earum cumque accusamus, porro, saepe tempora, adipisci nobis illum! Maxime, veniam, esse est dignissimos repudiandae saepe minima, assumenda nam necessitatibus in iure nulla mollitia! Ratione, sed!" +
      "Ad ducimus, tempora, labore ullam excepturi illum nihil amet et rerum mollitia quis? Dignissimos voluptatum laudantium temporibus delectus minima impedit, accusantium perspiciatis debitis incidunt neque assumenda blanditiis et ducimus beatae!" +
      "Perspiciatis, quam repellat ducimus et nisi possimus obcaecati in aut cum libero, officia quas ex at iure quod facere, quasi minima non consequuntur inventore. Harum facilis beatae quibusdam asperiores suscipit?" +
      "Eius cum earum natus totam minima nisi iusto qui pariatur libero voluptate mollitia ipsam aliquid, reiciendis consectetur repellendus inventore ad, nam velit porro ex necessitatibus illum ducimus. Sit, laboriosam. Similique!" +
      "Explicabo, rerum quas nostrum qui dolorum a aperiam illum, quae laboriosam dolore voluptatum quidem possimus aliquam unde repudiandae animi perferendis. Aliquid mollitia quas, quos dignissimos quod suscipit accusamus veritatis consequuntur?" +
      "Corrupti quo nemo quae est vitae ipsum harum velit tempore incidunt. Mollitia vitae nostrum a, ipsa quisquam explicabo fuga? A alias provident earum et aut in dolorem recusandae explicabo suscipit?" +
      "Nam, qui quia eius deserunt, nostrum incidunt, quod sequi iure in quae at ipsa nobis ullam perferendis explicabo necessitatibus ea cupiditate laudantium minima dolore. Corrupti veritatis dignissimos fugit rem doloribus." +
      "Tempore repellat minus impedit non, harum rem maiores porro veritatis aliquid, architecto eveniet fugit distinctio dignissimos. Quas sed illum sunt suscipit aliquam, saepe, ut eaque expedita atque laudantium odit facilis!" +
      "Suscipit deleniti reiciendis soluta quibusdam quae dolorum natus! Dolor est aliquam, laborum accusantium incidunt quisquam nesciunt nulla quaerat corrupti officia impedit porro iure suscipit, dolore velit perspiciatis nobis voluptate quidem!" +
      "Veniam libero officiis doloribus repellendus modi odit dolore suscipit ipsum aut ipsa asperiores totam nam sequi, quasi recusandae? Vitae rem ipsam adipisci tenetur fuga asperiores quia et sequi molestiae placeat." +
      "Laborum vitae unde quod eius, minus repellat, recusandae, alias debitis expedita non ea ex! Laboriosam facilis officiis ullam omnis? Quaerat voluptatum iure praesentium ullam facere, eos perspiciatis. Qui, modi dolor?" +
      "Provident et labore ipsum quas beatae necessitatibus. Minus commodi inventore libero quidem sunt quis praesentium, porro sed obcaecati perspiciatis ipsum consectetur, assumenda officiis odit molestias sapiente maiores quod, suscipit ullam?" +
      "Laborum, quam dicta recusandae voluptatem accusamus unde ex atque excepturi consequuntur fugiat, quos beatae sequi blanditiis, autem aspernatur molestiae tempora cum hic aliquid voluptatibus inventore. Consectetur, sed? Odit, fugit iure.",
    published: true,
    userId: "65f8a8688187038de876c46b",
    category: "Category 1",
    tags: ["tag1", "tag2"],
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 4,
  },
  {
    title: "Post 2",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, a! Culpa, voluptatibus molestiae praesentium repudiandae pariatur ipsa quae alias est fugiat illum sit perferendis sunt enim quam numquam quisquam a!" +
      "Doloribus libero fugiat, fugit saepe placeat eligendi dolor, voluptatibus unde repudiandae accusamus magnam. Commodi minima dolores minus voluptatum inventore! Reiciendis cum laboriosam, veniam deleniti minus culpa doloremque obcaecati dignissimos dolores!" +
      "Architecto aspernatur tenetur impedit odio. Ut iste dolores odio pariatur laborum explicabo reiciendis itaque deserunt iusto quo, alias aut velit veritatis quia inventore unde omnis saepe consequuntur? Distinctio, aliquid eligendi." +
      "Repellendus ea harum illum laborum eos dolores libero aspernatur sapiente aliquid quia quod nisi facere ipsum nihil omnis eveniet, in ratione culpa neque earum. Eos in ipsam libero repudiandae veritatis?" +
      "Animi, esse libero? Earum distinctio, illo cum sint at nesciunt dolorem nam perspiciatis odio, aliquid consectetur laborum. Dolorem amet quam sit voluptatem laboriosam tenetur sequi ea non adipisci aliquam? Ipsam!" +
      "Laborum, odio. Architecto sunt commodi obcaecati adipisci voluptatibus optio, numquam asperiores exercitationem maiores explicabo temporibus. Doloremque omnis, ex, pariatur sunt, at labore iste fuga reprehenderit aliquam voluptates amet id velit." +
      "Praesentium cupiditate quidem error maxime! Neque quam voluptas dignissimos voluptatem aliquid? Temporibus est, neque accusantium ut at necessitatibus. Vel praesentium, non deserunt reiciendis minus maxime consectetur ex voluptates? Cum, tempora!" +
      "Aliquid ipsam autem dolore error debitis omnis ut a incidunt rerum eaque quasi, similique obcaecati dicta in deleniti dignissimos quidem quod sequi! Facilis hic unde obcaecati quisquam, adipisci laboriosam quae." +
      "Consectetur, eius exercitationem, dolor dicta nam qui aspernatur, magni ex saepe consequatur nobis? Quis excepturi incidunt corrupti, error aspernatur alias nobis. Fuga dolores obcaecati corrupti ipsam rerum magni minus mollitia." +
      "Numquam, id ipsum. Dicta dignissimos eum quos, corporis ullam odit ex similique optio facilis autem omnis ratione, veritatis ad accusamus repudiandae laborum explicabo in ipsam eaque. Beatae eaque blanditiis illum." +
      "Consectetur ullam cumque, saepe rerum ipsum debitis qui assumenda perspiciatis ea, reiciendis quibusdam numquam inventore, esse at. Recusandae necessitatibus dolorem, eos sequi nulla ullam vero. A optio placeat earum similique?" +
      "Quidem cum iste accusamus accusantium quos possimus deserunt nihil dolor quod. Obcaecati minus alias, fuga rem architecto eligendi amet expedita, culpa corrupti non quisquam provident, corporis rerum ullam ratione consequatur!" +
      "Nihil quod, dolorem ducimus explicabo facilis deleniti, molestias sed repudiandae ipsa ratione officia vitae mollitia incidunt tenetur exercitationem iure a facere suscipit dicta? Delectus, non? Assumenda laborum eveniet quod excepturi?" +
      "Inventore, deleniti magni rem natus, recusandae corporis officiis quo eos odit non aliquid. Architecto voluptatum, sunt facilis molestiae natus voluptatem iure laborum, necessitatibus fuga iusto minima perspiciatis odio repudiandae pariatur." +
      "Ipsam repellendus rerum velit tempora accusantium? Dolore voluptatum expedita repellendus sed. A expedita nulla velit atque. Voluptatem iste delectus illum explicabo, mollitia, id, voluptate error quibusdam ipsam reprehenderit magni dolorum!" +
      "Odio, ut, ipsum sint dicta ratione architecto quo, iste error suscipit iure consequatur hic eos quod sed! Odio vitae odit, magnam tempore deleniti quibusdam illo perferendis optio aspernatur ad ex?" +
      "Excepturi nobis labore alias harum, soluta molestias repellat consequuntur odio fugit sit aut nisi optio totam quo quas obcaecati! Autem distinctio nostrum maiores consequatur quod molestias, cupiditate accusantium aliquam tenetur!" +
      "Animi quos pariatur quis earum cumque accusamus, porro, saepe tempora, adipisci nobis illum! Maxime, veniam, esse est dignissimos repudiandae saepe minima, assumenda nam necessitatibus in iure nulla mollitia! Ratione, sed!" +
      "Ad ducimus, tempora, labore ullam excepturi illum nihil amet et rerum mollitia quis? Dignissimos voluptatum laudantium temporibus delectus minima impedit, accusantium perspiciatis debitis incidunt neque assumenda blanditiis et ducimus beatae!" +
      "Perspiciatis, quam repellat ducimus et nisi possimus obcaecati in aut cum libero, officia quas ex at iure quod facere, quasi minima non consequuntur inventore. Harum facilis beatae quibusdam asperiores suscipit?" +
      "Eius cum earum natus totam minima nisi iusto qui pariatur libero voluptate mollitia ipsam aliquid, reiciendis consectetur repellendus inventore ad, nam velit porro ex necessitatibus illum ducimus. Sit, laboriosam. Similique!" +
      "Explicabo, rerum quas nostrum qui dolorum a aperiam illum, quae laboriosam dolore voluptatum quidem possimus aliquam unde repudiandae animi perferendis. Aliquid mollitia quas, quos dignissimos quod suscipit accusamus veritatis consequuntur?" +
      "Corrupti quo nemo quae est vitae ipsum harum velit tempore incidunt. Mollitia vitae nostrum a, ipsa quisquam explicabo fuga? A alias provident earum et aut in dolorem recusandae explicabo suscipit?" +
      "Nam, qui quia eius deserunt, nostrum incidunt, quod sequi iure in quae at ipsa nobis ullam perferendis explicabo necessitatibus ea cupiditate laudantium minima dolore. Corrupti veritatis dignissimos fugit rem doloribus." +
      "Tempore repellat minus impedit non, harum rem maiores porro veritatis aliquid, architecto eveniet fugit distinctio dignissimos. Quas sed illum sunt suscipit aliquam, saepe, ut eaque expedita atque laudantium odit facilis!" +
      "Suscipit deleniti reiciendis soluta quibusdam quae dolorum natus! Dolor est aliquam, laborum accusantium incidunt quisquam nesciunt nulla quaerat corrupti officia impedit porro iure suscipit, dolore velit perspiciatis nobis voluptate quidem!" +
      "Veniam libero officiis doloribus repellendus modi odit dolore suscipit ipsum aut ipsa asperiores totam nam sequi, quasi recusandae? Vitae rem ipsam adipisci tenetur fuga asperiores quia et sequi molestiae placeat." +
      "Laborum vitae unde quod eius, minus repellat, recusandae, alias debitis expedita non ea ex! Laboriosam facilis officiis ullam omnis? Quaerat voluptatum iure praesentium ullam facere, eos perspiciatis. Qui, modi dolor?" +
      "Provident et labore ipsum quas beatae necessitatibus. Minus commodi inventore libero quidem sunt quis praesentium, porro sed obcaecati perspiciatis ipsum consectetur, assumenda officiis odit molestias sapiente maiores quod, suscipit ullam?" +
      "Laborum, quam dicta recusandae voluptatem accusamus unde ex atque excepturi consequuntur fugiat, quos beatae sequi blanditiis, autem aspernatur molestiae tempora cum hic aliquid voluptatibus inventore. Consectetur, sed? Odit, fugit iure.",
    published: true,
    userId: "65f8a8688187038de876c46c",
    category: "Category 2",
    tags: ["tag1", "tag2"],
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 5,
  },
  {
    title: "Post 3",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, a! Culpa, voluptatibus molestiae praesentium repudiandae pariatur ipsa quae alias est fugiat illum sit perferendis sunt enim quam numquam quisquam a!" +
      "Doloribus libero fugiat, fugit saepe placeat eligendi dolor, voluptatibus unde repudiandae accusamus magnam. Commodi minima dolores minus voluptatum inventore! Reiciendis cum laboriosam, veniam deleniti minus culpa doloremque obcaecati dignissimos dolores!" +
      "Architecto aspernatur tenetur impedit odio. Ut iste dolores odio pariatur laborum explicabo reiciendis itaque deserunt iusto quo, alias aut velit veritatis quia inventore unde omnis saepe consequuntur? Distinctio, aliquid eligendi." +
      "Repellendus ea harum illum laborum eos dolores libero aspernatur sapiente aliquid quia quod nisi facere ipsum nihil omnis eveniet, in ratione culpa neque earum. Eos in ipsam libero repudiandae veritatis?" +
      "Animi, esse libero? Earum distinctio, illo cum sint at nesciunt dolorem nam perspiciatis odio, aliquid consectetur laborum. Dolorem amet quam sit voluptatem laboriosam tenetur sequi ea non adipisci aliquam? Ipsam!" +
      "Laborum, odio. Architecto sunt commodi obcaecati adipisci voluptatibus optio, numquam asperiores exercitationem maiores explicabo temporibus. Doloremque omnis, ex, pariatur sunt, at labore iste fuga reprehenderit aliquam voluptates amet id velit." +
      "Praesentium cupiditate quidem error maxime! Neque quam voluptas dignissimos voluptatem aliquid? Temporibus est, neque accusantium ut at necessitatibus. Vel praesentium, non deserunt reiciendis minus maxime consectetur ex voluptates? Cum, tempora!" +
      "Aliquid ipsam autem dolore error debitis omnis ut a incidunt rerum eaque quasi, similique obcaecati dicta in deleniti dignissimos quidem quod sequi! Facilis hic unde obcaecati quisquam, adipisci laboriosam quae." +
      "Consectetur, eius exercitationem, dolor dicta nam qui aspernatur, magni ex saepe consequatur nobis? Quis excepturi incidunt corrupti, error aspernatur alias nobis. Fuga dolores obcaecati corrupti ipsam rerum magni minus mollitia." +
      "Numquam, id ipsum. Dicta dignissimos eum quos, corporis ullam odit ex similique optio facilis autem omnis ratione, veritatis ad accusamus repudiandae laborum explicabo in ipsam eaque. Beatae eaque blanditiis illum." +
      "Consectetur ullam cumque, saepe rerum ipsum debitis qui assumenda perspiciatis ea, reiciendis quibusdam numquam inventore, esse at. Recusandae necessitatibus dolorem, eos sequi nulla ullam vero. A optio placeat earum similique?" +
      "Quidem cum iste accusamus accusantium quos possimus deserunt nihil dolor quod. Obcaecati minus alias, fuga rem architecto eligendi amet expedita, culpa corrupti non quisquam provident, corporis rerum ullam ratione consequatur!" +
      "Nihil quod, dolorem ducimus explicabo facilis deleniti, molestias sed repudiandae ipsa ratione officia vitae mollitia incidunt tenetur exercitationem iure a facere suscipit dicta? Delectus, non? Assumenda laborum eveniet quod excepturi?" +
      "Inventore, deleniti magni rem natus, recusandae corporis officiis quo eos odit non aliquid. Architecto voluptatum, sunt facilis molestiae natus voluptatem iure laborum, necessitatibus fuga iusto minima perspiciatis odio repudiandae pariatur." +
      "Ipsam repellendus rerum velit tempora accusantium? Dolore voluptatum expedita repellendus sed. A expedita nulla velit atque. Voluptatem iste delectus illum explicabo, mollitia, id, voluptate error quibusdam ipsam reprehenderit magni dolorum!" +
      "Odio, ut, ipsum sint dicta ratione architecto quo, iste error suscipit iure consequatur hic eos quod sed! Odio vitae odit, magnam tempore deleniti quibusdam illo perferendis optio aspernatur ad ex?" +
      "Excepturi nobis labore alias harum, soluta molestias repellat consequuntur odio fugit sit aut nisi optio totam quo quas obcaecati! Autem distinctio nostrum maiores consequatur quod molestias, cupiditate accusantium aliquam tenetur!" +
      "Animi quos pariatur quis earum cumque accusamus, porro, saepe tempora, adipisci nobis illum! Maxime, veniam, esse est dignissimos repudiandae saepe minima, assumenda nam necessitatibus in iure nulla mollitia! Ratione, sed!" +
      "Ad ducimus, tempora, labore ullam excepturi illum nihil amet et rerum mollitia quis? Dignissimos voluptatum laudantium temporibus delectus minima impedit, accusantium perspiciatis debitis incidunt neque assumenda blanditiis et ducimus beatae!" +
      "Perspiciatis, quam repellat ducimus et nisi possimus obcaecati in aut cum libero, officia quas ex at iure quod facere, quasi minima non consequuntur inventore. Harum facilis beatae quibusdam asperiores suscipit?" +
      "Eius cum earum natus totam minima nisi iusto qui pariatur libero voluptate mollitia ipsam aliquid, reiciendis consectetur repellendus inventore ad, nam velit porro ex necessitatibus illum ducimus. Sit, laboriosam. Similique!" +
      "Explicabo, rerum quas nostrum qui dolorum a aperiam illum, quae laboriosam dolore voluptatum quidem possimus aliquam unde repudiandae animi perferendis. Aliquid mollitia quas, quos dignissimos quod suscipit accusamus veritatis consequuntur?" +
      "Corrupti quo nemo quae est vitae ipsum harum velit tempore incidunt. Mollitia vitae nostrum a, ipsa quisquam explicabo fuga? A alias provident earum et aut in dolorem recusandae explicabo suscipit?" +
      "Nam, qui quia eius deserunt, nostrum incidunt, quod sequi iure in quae at ipsa nobis ullam perferendis explicabo necessitatibus ea cupiditate laudantium minima dolore. Corrupti veritatis dignissimos fugit rem doloribus." +
      "Tempore repellat minus impedit non, harum rem maiores porro veritatis aliquid, architecto eveniet fugit distinctio dignissimos. Quas sed illum sunt suscipit aliquam, saepe, ut eaque expedita atque laudantium odit facilis!" +
      "Suscipit deleniti reiciendis soluta quibusdam quae dolorum natus! Dolor est aliquam, laborum accusantium incidunt quisquam nesciunt nulla quaerat corrupti officia impedit porro iure suscipit, dolore velit perspiciatis nobis voluptate quidem!" +
      "Veniam libero officiis doloribus repellendus modi odit dolore suscipit ipsum aut ipsa asperiores totam nam sequi, quasi recusandae? Vitae rem ipsam adipisci tenetur fuga asperiores quia et sequi molestiae placeat." +
      "Laborum vitae unde quod eius, minus repellat, recusandae, alias debitis expedita non ea ex! Laboriosam facilis officiis ullam omnis? Quaerat voluptatum iure praesentium ullam facere, eos perspiciatis. Qui, modi dolor?" +
      "Provident et labore ipsum quas beatae necessitatibus. Minus commodi inventore libero quidem sunt quis praesentium, porro sed obcaecati perspiciatis ipsum consectetur, assumenda officiis odit molestias sapiente maiores quod, suscipit ullam?" +
      "Laborum, quam dicta recusandae voluptatem accusamus unde ex atque excepturi consequuntur fugiat, quos beatae sequi blanditiis, autem aspernatur molestiae tempora cum hic aliquid voluptatibus inventore. Consectetur, sed? Odit, fugit iure.",
    published: true,
    userId: "65f8a8688187038de876c46d",
    category: "Category 3",
    tags: ["tag1", "tag2"],
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 3,
  },
];
const comments = [
  {
    content: "Content 1",
    userId: "65f8a8688187038de876c46b",
    postId: "65f8a89e0eb2e504ad7235e3",
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 4,
  },
  {
    content: "Content 2",
    userId: "65f8a8688187038de876c46c",
    postId: "65f8a89e0eb2e504ad7235e4",
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 5,
  },
  {
    content: "Content 3",
    userId: "65f8a8688187038de876c46d",
    postId: "65f8a89e0eb2e504ad7235e4",
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: 3,
  },
];

export const seedData = async () => {
  Comment.insertMany(comments);

  Post.insertMany(posts);

  User.insertMany(users);
};

export default dbConnection;
