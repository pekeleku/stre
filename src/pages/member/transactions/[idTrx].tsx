import {
  HistoryTransactionTypes,
  JWTPayloadsTypes,
  UserTypes,
} from "@/services/data-types";
import TransactionsDetailContent from "../../../../components/organisms/TransactionsDetailContent";
import jwtDecode from "jwt-decode";
import { getTransactionDetail } from "@/services/member";

interface TransactionDetailTypesProps {
  transactionDetail: HistoryTransactionTypes;
}

export default function Detail(props: TransactionDetailTypesProps) {
  const { transactionDetail } = props;

  return (
    <section className="transactions-detail overflow-auto">
      <TransactionsDetailContent data={transactionDetail} />
    </section>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
  params: {
    idTrx: string;
  };
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
  const { idTrx } = params;
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }
  const jwtToken = Buffer.from(token, "base64").toString("ascii");
  const payload: JWTPayloadsTypes = jwtDecode(jwtToken);
  const userFromPayload: UserTypes = payload.player;
  const IMG = process.env.NEXT_PUBLIC_IMG;
  userFromPayload.avatar = `${IMG}/$${userFromPayload.avatar}`;
  const response = await getTransactionDetail(idTrx, jwtToken);
  return {
    props: {
      transactionDetail: response.data,
    },
  };
}
