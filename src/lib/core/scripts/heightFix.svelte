<script lang="ts">
    import { onMount } from "svelte";

    let heightScreenElements: HTMLElement[];
    let classRegex: RegExp = /(lg|sm|md)\:h\-/gm;
    let selectorRegex: RegExp = /(lg|sm|md)/gm;

    //prevent elements with sm, md, or lg selectors from being overwritten depending on screen size
    function checkIfSelectorMatch(element: HTMLElement): boolean {
        const classMatches: any = classRegex.exec(element.classList.toString());

        if (classMatches === null) return false;

        let result: boolean = false;

        //we found matches now check if they are being used
        classMatches.forEach((string: string) => {
            const selectorMatches: any = selectorRegex.exec(string);

            //if no matches from the selector regex are found then return
            if (selectorMatches === null) {
                result = result === true ? true : false;
                return;
            }

            //check with based on selector
            switch (selectorMatches[0]) {
                case "lg":
                    result = window.innerWidth > 1024;
                    break;
                case "md":
                    result = window.innerWidth > 768;
                    break;
                case "sm":
                    result = window.innerWidth > 640;
                    break;
            }
        });

        return result;
    }

    //fixes bug on IOS where the viewport space is bigger than the innerHeight
    function updateHeightElements() {
        heightScreenElements = Array.from(document.querySelectorAll(".h-screen") as unknown as HTMLCollectionOf<HTMLElement>);

        heightScreenElements.forEach((element: HTMLElement) => {
            //check to make sure that size should be set
            if (checkIfSelectorMatch(element) === true) {
                element.style.height = null as any;
                return;
            }

            element.style.height = `${window.innerHeight}px`;
        });
    }

    onMount(() => {
        updateHeightElements();

        setInterval(updateHeightElements, 1000 / 5);
    });
</script>
