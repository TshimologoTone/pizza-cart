document.addEventListener('DOMContentLoaded', function() {
    const favoriteBtnSmall = document.getElementById('favorite-btn');
    const favoriteBtnMedium = document.getElementById('favorite-btn-medium');
    const favoriteBtnLarge = document.getElementById('favorite-btn-large');
    
    favoriteBtnSmall.addEventListener('click', function(event) {
        event.preventDefault();
        
        const icon = favoriteBtnSmall.querySelector('i');
        
        if (icon.textContent === 'favorite_border') {
            icon.textContent = 'favorite';
            favoriteBtnSmall.classList.add('favorite-clicked');
        } else {
            icon.textContent = 'favorite_border';
            favoriteBtnSmall.classList.remove('favorite-clicked');
        }
    });

    favoriteBtnMedium.addEventListener('click', function(e) {
        e.preventDefault();

        const iconMedium = favoriteBtnMedium.querySelector('i');

        if (iconMedium.textContent === 'favorite_border') {
            iconMedium.textContent = 'favorite';
            favoriteBtnSmall.classList.add('favorite-clicked-medium');
        } else {
            iconMedium.textContent = 'favorite_border';
            favoriteBtnSmall.classList.remove('favorite-clicked-medium');
        }
    })

    favoriteBtnLarge.addEventListener('click', function(e){
        e.preventDefault();

        const iconLarge = favoriteBtnLarge.querySelector('i');

        if(iconLarge.textContent === "favorite_border") {
            iconLarge.textContent = 'favorite';
            favoriteBtnLarge.classList.add('favorite-clicked-large');
        } else {
            iconLarge.textContent = 'favorite_border';
            favoriteBtnLarge.classList.remove('favorite-clicked-large');
        }
    })
});



function ShoppingCart() {
    return {
        cart: {
            Small: 'Small Pizza',
            Medium: 'Medi Pizza',
            Large: 'Large Pizza'
        },

        price: {
            SmallPrice: 'R49.00',
            MediumPrice: 'R89.00',
            LargePrice: 'R129.00'
        },

        emptyCart: {
            smallpricePizza: 0,
            medipricePizza: 0,
            largepricePizza: 0
        },

        ZeroItemsOncart: {
            smallPizza: 'R0',
            mediumPizza: 'R0',
            largePizza: 'R0'
        },

        paymentAmount: null,
        message: '',
        isCheckingOut: false,

        get totalCost() {
            const parsePrice = (price) => parseFloat(price.replace('R', ''));
            return (parsePrice(this.price.SmallPrice) * this.emptyCart.smallpricePizza) +
                   (parsePrice(this.price.MediumPrice) * this.emptyCart.medipricePizza) +
                   (parsePrice(this.price.LargePrice) * this.emptyCart.largepricePizza);
        },

        get hasItems() {
            return this.emptyCart.smallpricePizza > 0 || this.emptyCart.medipricePizza > 0 || this.emptyCart.largepricePizza > 0;
        },

        addToCart(size) {
            this.emptyCart[size]++;
        },

        incrementPrice(size) {
            const parsePrice = (ZeroItemsOncart) => parseFloat(ZeroItemsOncart.replace('R', ''));
            const currentPrice = parsePrice(this.ZeroItemsOncart[size]);
            const predefinedPrice = parsePrice(this.price.SmallPrice);
            const newPrice = currentPrice + predefinedPrice;
            this.ZeroItemsOncart[size] = 'R' + newPrice.toFixed(2)
        },

        incrementPriceMedium(size) {
            const parsePrice = (ZeroItemsOncart) => parseFloat(ZeroItemsOncart.replace('R', ''));
            const currentPrice = parsePrice(this.ZeroItemsOncart[size]);
            const predefinedPrice = parsePrice(this.price.MediumPrice);
            const newPrice = currentPrice + predefinedPrice;
            this.ZeroItemsOncart[size] = 'R' + newPrice.toFixed(2)
        },

        incrementPriceLarger(size) {
            const parsePrice = (ZeroItemsOncart) => parseFloat(ZeroItemsOncart.replace('R', ''));
            const currentPrice = parsePrice(this.ZeroItemsOncart[size]);
            const predefinedPrice = parsePrice(this.price.LargePrice);
            const newPrice = currentPrice + predefinedPrice;
            this.ZeroItemsOncart[size] = 'R' + newPrice.toFixed(2)
        },

        removeFromCart(size) {
            if (this.emptyCart[size] > 0) {
                this.emptyCart[size]--;
            }
        },

        decrementPrice(size) {
            const parsePrice = (ZeroItemsOncart) => parseFloat(ZeroItemsOncart.replace('R', ''));
            const currentPrice = parsePrice(this.ZeroItemsOncart[size]);
            if(currentPrice > 0){
                const newPrice = currentPrice - 49.00;
                this.ZeroItemsOncart[size] = 'R' + newPrice.toFixed(2)
            }
        },

        decrementPriceMedium(size) {
            const parsePrice = (ZeroItemsOncart) => parseFloat(ZeroItemsOncart.replace('R', ''));
            const currentPrice = parsePrice(this.ZeroItemsOncart[size]);
            if(currentPrice > 0){
                const newPrice = currentPrice - 89.00;
                this.ZeroItemsOncart[size] = 'R' + newPrice.toFixed(2)
            }
        },

        decrementPriceLarge(size) {
            const parsePrice = (ZeroItemsOncart) => parseFloat(ZeroItemsOncart.replace('R', ''));
            const currentPrice = parsePrice(this.ZeroItemsOncart[size]);
            if(currentPrice > 0){
                const newPrice = currentPrice - 129.00;
                this.ZeroItemsOncart[size] = 'R' + newPrice.toFixed(2)
            }
        },

        proceedToCheckout() {
            this.isCheckingOut = true;
        },

        checkout() {
            if (this.paymentAmount == this.totalCost) {
                this.message = "Enjoy your pizzas!";
                this.emptyCart = { smallpricePizza: 0, medipricePizza: 0, largepricePizza: 0 };
                this.ZeroItemsOncart = { smallPizza: 'R0', mediumPizza: 'R0', largePizza: 'R0' };
                this.isCheckingOut = false;
            }
            else if (this.paymentAmount >= this.totalCost) {
                const change = this.paymentAmount - this.totalCost;
                this.message = "You have some change" + " R" + change.toFixed(2) + "<br><br>Enjoy your pizzas!";
                this.emptyCart = { smallpricePizza: 0, medipricePizza: 0, largepricePizza: 0 };
                this.ZeroItemsOncart = { smallPizza: 'R0', mediumPizza: 'R0', largePizza: 'R0' };
                this.isCheckingOut = false;   
            }
            else {
                this.message = "Sorry - that is not enough money!";
            }
            this.paymentAmount = null;
            setTimeout(() => this.message = '', 6000);
        }
    };
}