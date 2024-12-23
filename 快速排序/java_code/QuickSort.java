package 快速排序.java_code;
import java.util.ArrayList;
import java.util.StringJoiner;

public class QuickSort {
    public static void main(String[] args) {
        int[] arr = {1, 2, 5, 3, 4, 9, 8, 10, 21, 15};
        printArr(arr);
        int[] sortArr = quickSort(arr);
        System.out.println("排序后：");
        printArr(sortArr);
    }

    public static int[] quickSort(int[] arr) {
        int len = arr.length;
        if (len <= 1) {
            return arr;
        }

        // 找到基准数
        int pivotIndex = (len - 1) / 2;
        int pivotItem = arr[pivotIndex];

        // 将数组分成两部分
        ArrayList<Integer> leftList = new ArrayList<Integer>();
        ArrayList<Integer> rightList = new ArrayList<Integer>();

        for (int i = 0; i < arr.length; i++) {
            if (i == pivotIndex) {
                continue;
            }

            if (arr[i] < pivotItem) {
                // 左部分的元素小于基准
                leftList.add(arr[i]);
            } else {
                // 右部分的元素大于等于基准
                rightList.add(arr[i]);
            }
        }

        int[] left = list2Array(leftList);
        int[] right = list2Array(rightList);

        int[] newLeft = quickSort(left);
        int[] newRight = quickSort(right);

        int[] newArr = new int[len];
        int leftLen = newLeft.length;

        for (int i = 0; i < newArr.length; i++) {
            if (i < leftLen) {
                newArr[i] = newLeft[i];
            } else if (i == leftLen) {
                newArr[i] = pivotItem;
            } else {
                newArr[i] = newRight[i - leftLen - 1];
            }
        }

        return newArr;
    }

    public static int[] list2Array(ArrayList<Integer> list) {
        int len = list.size();
        int[] arr = new int[len];

        for (int i = 0; i < len; i++) {
            arr[i] = list.get(i);
        }

        return arr;
    }

    public static void printArr(int[] arr) {
        StringJoiner sj = new StringJoiner(", ", "[", "]");
        for (int i = 0; i < arr.length; i++) {
            sj.add(arr[i] + "");
        }
        System.out.println(sj.toString());
    }
}

