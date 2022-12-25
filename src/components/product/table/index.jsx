import * as React from "react";
import { Section } from "./styled-index";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Put from "./../../../assets/image/icons-put.png";
import Delete from "./../../../assets/image/icons-delete.png";
import { useSelector } from "react-redux";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

// ant tabs
import { Tabs } from "antd";

const onChange = (key) => {
  console.log(key);
};

export default function TableAdd({ onClickDelete, onClickPut }) {
  const getProducts = useSelector((state) => state.product.getProducts?.Data);

  //  ant tab function
  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  //  ant tab function

  console.log(getProducts);
  const HeaderRows = [
    {
      id: 1,
      title: "kартинка До",
    },
    {
      id: 2,
      title: "kартинка После",
    },
    {
      id: 3,
      title: "имя",
    },
    {
      id: 4,
      title: "описание",
    },
    {
      id: 4,
      title: "Удалить и изминеть",
      algin: "right",
    },
  ];
  return (
    <>
      <Section>
        <Tabs
          sx={{ width: "100%" }}
          defaultActiveKey="1"
          onChange={onChange}
          items={getProducts.map((elem) => ({
            label: elem.title_ru,
            key: elem.category_id,
            children: (
              <>
                <ImageList
                  className="grid-img"
                  sx={{ width: "100%", height: 450 }}
                  variant="quilted"
                  cols={4}
                  rowHeight={121}
                >
                  {elem.products.map((item) => (
                    <ImageListItem
                      key={item.product_id}
                      cols={item.cols || 1}
                      rows={item.rows || 2}
                    >
                      <img
                        {...srcset(item.product_img1, 121, item.rows, item.cols)}
                        alt={item.product_title_ru}
                        loading="lazy"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </>
            ),
          }))}
        />
      </Section>

      {/* <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {HeaderRows.map((elem, index) => (
              <>
                <TableCell align={elem.algin} key={index}>
                  {elem.title}
                </TableCell>
              </>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {SingleGetState.map((row) => (
            <TableRow
              key={row.single_id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img src={row.single_img1} width={100} height={60} alt="" />
              </TableCell>
              <TableCell component="th" scope="row">
                <img src={row.single_img2} width={100} height={60} alt="" />
              </TableCell>
              <TableCell component="th" scope="row">
                {row.single_title_ru}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.single_description_ru}
              </TableCell>
              <TableCell align="right">
                <button
                  style={{
                    background: "white",
                    border: "none",
                    cursor: "pointer",
                  }}
                  id={row.single_id}
                  onClick={onClickPut}
                >
                  <img
                    id={row.single_id}
                    src={Put}
                    width={25}
                    height={25}
                    alt=""
                  />
                </button>{" "}
                <button
                  style={{
                    background: "white",
                    border: "none",
                    cursor: "pointer",
                  }}
                  id={row.single_id}
                  onClick={onClickDelete}
                >
                  <img
                    id={row.single_id}
                    src={Delete}
                    width={25}
                    height={25}
                    alt=""
                  />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>   */}
    </>
  );
}

const itemData = [
  {
    img: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1643383.jpg&fm=jpg",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571453.jpg&fm=jpg",
    title: "Burger",
  },
  {
    img: "https://wallpaperaccess.com/full/2594900.jpg",
    title: "Camera",
  },
  {
    img: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?cs=srgb&dl=pexels-victoria-akvarel-1648776.jpg&fm=jpg",
    title: "Coffee",
    rows: 4,
    cols: 1,
  },
  {
    img: "https://www.smalldesignideas.com/wp-content/uploads/2019/12/14-1.jpg",
    title: "Hats",
    cols: 1,
  },
  {
    img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571460.jpg&fm=jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9mvlniEa2P_bNmdFNe5VYv8_Tonk6Q5CzZ_CbaFVjhVC5wLAlAMbuG5SjYipuqqTuQt8&usqp=CAU",
    title: "Basketball",
  },
  {
    img: "https://www.smalldesignideas.com/wp-content/uploads/2019/12/14-1.jpg",
    title: "Fern",
  },
  {
    img: "https://wallpaperaccess.com/full/2594900.jpg",
    title: "Mushrooms",
    rows: 2,
    cols: 1,
  },
  {
    img: "https://www.smalldesignideas.com/wp-content/uploads/2019/12/14-1.jpg",
    title: "Tomato basil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://www.smalldesignideas.com/wp-content/uploads/2019/12/14-1.jpg",
    title: "Sea star",
  },
  {
    img: "https://www.smalldesignideas.com/wp-content/uploads/2019/12/14-1.jpg",
    title: "Sea star",
    rows: 4,
    cols: 1,
  },
  {
    img: "https://www.smalldesignideas.com/wp-content/uploads/2019/12/14-1.jpg",
    title: "Sea star",
  },
  {
    img: "https://www.smalldesignideas.com/wp-content/uploads/2019/12/14-1.jpg",
    title: "Sea star",
    rows: 2,
    cols: 2,
  },
];
