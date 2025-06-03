"use client";

import { useEffect, useState } from "react";
import { Cart, getStoredCart, saveCart } from "@/types/cart";
import Link from "next/link";

export default function CheckoutPage() {
  const [cart, setCart] = useState<Cart | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  useEffect(() => {
    const storedCart = getStoredCart();
    setCart(storedCart);
  }, []);

  const processOrder = () => {
    setIsProcessing(true);

    
    setTimeout(() => {
      const orderNum = `CMD-${Date.now()}`;
      setOrderNumber(orderNum);
      setOrderConfirmed(true);
      setIsProcessing(false);

      
      const emptyCart = { items: [], total: 0 };
      saveCart(emptyCart);
      setCart(emptyCart);

      
      window.dispatchEvent(
        new CustomEvent("cartUpdated", {
          detail: emptyCart,
        })
      );
    }, 2000);
  };

  if (!cart || cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Panier vide</h1>
          <p className="text-gray-600 mb-6">
            Votre panier est vide. Ajoutez des articles pour continuer.
          </p>
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-medium transition-colors"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  if (orderConfirmed) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
          <div className="text-6xl mb-4">✅</div>
          <h1 className="text-2xl font-bold text-green-600 mb-4">
            Commande confirmée !
          </h1>
          <p className="text-gray-600 mb-2">
            Votre commande a été traitée avec succès.
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Numéro de commande :{" "}
            <span className="font-mono">{orderNumber}</span>
          </p>

          <div className="space-y-3">
            <Link
              href="/"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors block"
            >
              Retour à l'accueil
            </Link>
            <Link
              href="/subscriptions"
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors block"
            >
              Découvrir d'autres abonnements
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Finaliser la commande
          </h1>
          <p className="text-gray-600 mt-2">
            Vérifiez votre commande avant de procéder au paiement
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">
              Résumé de la commande
            </h2>

            <div className="space-y-4">
              {cart.items.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-start border-b pb-4"
                >
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    {item.type === "subscription" && (
                      <div className="text-sm text-gray-600">
                        <p>
                          Durée:{" "}
                          {item.subscriptionDuration === "monthly"
                            ? "Mensuel"
                            : "Annuel"}
                        </p>
                        <p>Type: {item.contentType}</p>
                      </div>
                    )}
                    {item.type === "product" && (
                      <p className="text-sm text-gray-600">
                        Taille: {item.size} | Couleur: {item.color}
                      </p>
                    )}
                    <p className="text-sm text-gray-600">
                      Quantité: {item.quantity}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">
                      {(item.price * item.quantity).toFixed(2)}€
                    </p>
                  </div>
                </div>
              ))}

              <div className="border-t pt-4">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total</span>
                  <span>{cart.total.toFixed(2)}€</span>
                </div>
              </div>
            </div>
          </div>

          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Paiement</h2>

            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-blue-600">ℹ️</span>
                  <span className="font-medium text-blue-800">
                    Mode démonstration
                  </span>
                </div>
                <p className="text-sm text-blue-700">
                  Ceci est une simulation. Aucun paiement réel ne sera effectué.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="votre@email.com"
                    defaultValue="demo@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Jean Dupont"
                    defaultValue="Jean Dupont"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Numéro de carte (simulation)
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="4242 4242 4242 4242"
                    defaultValue="4242 4242 4242 4242"
                    disabled
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Expiration
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="MM/AA"
                      defaultValue="12/25"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CVC
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="123"
                      defaultValue="123"
                      disabled
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={processOrder}
                disabled={isProcessing}
                className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Traitement en cours...
                  </>
                ) : (
                  <>🔒 Confirmer la commande - {cart.total.toFixed(2)}€</>
                )}
              </button>

              <div className="text-center">
                <Link
                  href="/cart"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  ← Retour au panier
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
