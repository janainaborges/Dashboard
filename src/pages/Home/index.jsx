import { Layout } from "../../layout";
import {
  LineChart,
  XAxis,
  YAxis,
  Line,
  CartesianGrid,
  Tooltip,
} from "recharts";
import * as S from "./styles";

const data = [
  {
    name: "Exemplo A",
    uv: 400,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Exemplo B",
    uv: 2000,
  },
  {
    name: "Exemplo C",
    uv: 1200,
  },
  {
    name: "Exemplo D",
    uv: 20,
  },
];

export function Home() {
  return (
    <>
      <Layout>
        <S.Container>
          <h1>Dashboard | Home</h1>
          <S.Content>
            <S.CardConteiner>
              <S.CardItem>
                <span>Nº Users</span>
                10
              </S.CardItem>
              <S.CardItem>
                <span>Nº Classes</span>
                20
              </S.CardItem>
            </S.CardConteiner>
            <div style={{display: "flex", gap:"1rem"}}>
              <S.GraphicContainer>
                <h2>Graphic Access</h2>
                <LineChart width={400} height={400} data={data}>
                  <XAxis dataKey="nameX" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                  <CartesianGrid stroke="#ccc" />
                  <Line type="monotone" dataKey="amt" stroke="#ff7300" />
                </LineChart>
              </S.GraphicContainer>
              <S.GraphicContainer>
                <h2>Graphic Access</h2>
                <LineChart width={400} height={400} data={data}>
                  <XAxis dataKey="nameX" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                  <CartesianGrid stroke="#ccc" />
                  <Line type="monotone" dataKey="amt" stroke="#ff7300" />
                </LineChart>
              </S.GraphicContainer>
            </div>
          </S.Content>
        </S.Container>
      </Layout>
    </>
  );
}
