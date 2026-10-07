import React, { createContext, useContext, useState, ReactNode } from "react";

export interface CheckoutProduct {
  productId: "travel-crm" | "invoice-builder" | string;
  title: string;
  price: number;
  regularPrice?: number;
  currency?: string;
  cadence?: string;
  badge?: string;
  planId?: "monthly" | "annual" | "lifetime" | string;
  description?: string;
}

export interface CustomerDetails {
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  gstin?: string;
}

interface ProductCheckoutContextType {
  isOpen: boolean;
  product: CheckoutProduct | null;
  openCheckout: (product: CheckoutProduct) => void;
  closeCheckout: () => void;
}

const ProductCheckoutContext = createContext<ProductCheckoutContextType | undefined>(undefined);

export const ProductCheckoutProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<CheckoutProduct | null>(null);

  const openCheckout = (item: CheckoutProduct) => {
    setProduct(item);
    setIsOpen(true);
  };

  const closeCheckout = () => {
    setIsOpen(false);
  };

  return (
    <ProductCheckoutContext.Provider value={{ isOpen, product, openCheckout, closeCheckout }}>
      {children}
    </ProductCheckoutContext.Provider>
  );
};

export const useProductCheckout = () => {
  const context = useContext(ProductCheckoutContext);
  if (!context) {
    throw new Error("useProductCheckout must be used within a ProductCheckoutProvider");
  }
  return context;
};
