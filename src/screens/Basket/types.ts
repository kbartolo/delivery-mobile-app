import { StackScreenProps } from "@react-navigation/stack";
import { MainStackParams } from "../../routes/types";

export type BasketNavigationProps = StackScreenProps<MainStackParams, "Basket">;

export type BasketProps = BasketNavigationProps & {};
