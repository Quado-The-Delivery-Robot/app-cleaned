<script lang="ts">
    import type { cart } from "$lib/core/types";

    export let cart: cart;
</script>

<a class="glass p-5 text-left" href="/carts/{cart.restaurant}">
    <p>{cart.restaurant}</p>
</a>
