import java.util.StringJoiner;

public class QuickSortInplace {
    public static void main(String[] args) {
        int[] arr = {1, 2, 5, 3, 4, 9, 8, 10, 21, 15};
        printArr(arr);
        quickSort(arr, 0, arr.length - 1);
        System.out.println("排序后：");
        printArr(arr);
    }

    public static void quickSort(int[] arr, int left, int right) {
        int len = arr.length;
        if (len <= 1) return;

        if (left < right) {
            int pivotItem = arr[right];
            int i = left - 1;

            for (int j = left; j < right; j++) {
                if (arr[j] < pivotItem) {
                    i++;
                    // 将比基准值小的元素都排到前面
                    exchange(arr, i, j);
                }
            }

            //  此时，比基准值小的元素都在基准值前面，比基准值大的元素都在基准值后面
            exchange(arr, i + 1, right);

            int pivotIndex = i + 1;

            // 对基准值右边的元素继续进行快排
            quickSort(arr, pivotIndex + 1, right);
            // 对基准值左边的元素继续进行快排
            quickSort(arr, left, pivotIndex - 1);
        }

        return;
    }

    public static void exchange(int[] arr, int left, int right) {
        int temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
    }

    public static void printArr(int[] arr) {
        StringJoiner sj = new StringJoiner(", ", "[", "]");
        for (int i = 0; i < arr.length; i++) {
            sj.add(arr[i] + "");
        }
        System.out.println(sj.toString());
    }
}
