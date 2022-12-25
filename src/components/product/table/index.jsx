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
                          {...srcset(
                            item.product_img1,
                            121,
                            item.rows,
                            item.cols
                          )}
                          alt={item.product_title_ru}
                          loading="lazy"
                        />
                        <div className="crud-div">
                          <button
                            style={{
                              border: "none",
                              cursor: "pointer",
                            }}
                            id={item.product_id}
                            onClick={onClickPut}
                          >
                            <img
                              id={item.product_id}
                              src={Put}
                              width={25}
                              height={25}
                              alt=""
                            />
                          </button>
                          <button
                            style={{
                              border: "none",
                              cursor: "pointer",
                            }}
                            id={item.product_id}
                            onClick={onClickDelete}
                          >
                            <img
                              id={item.product_id}
                              src={Delete}
                              width={25}
                              height={25}
                              alt=""
                            />
                          </button>
                        </div>
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
